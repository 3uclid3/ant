# ---------- base: shared toolchain ----------
FROM ubuntu:24.04 AS base

ARG LLVM_VERSION=21
ARG GCC_VERSION=14

ENV DEBIAN_FRONTEND=noninteractive
ENV CMAKE_GENERATOR=Ninja

# Base tools + versioned GCC
RUN set -eux; \
    apt-get update -y; \
    apt-get install -y --no-install-recommends \
      make cmake ccache ninja-build pkg-config binutils \
      gcc-${GCC_VERSION} g++-${GCC_VERSION} libc6-dev libstdc++-${GCC_VERSION}-dev libstdc++6 \
      gcovr \
      curl ca-certificates gnupg lsb-release software-properties-common \
      git unzip xz-utils openssh-client; \
    ln -sf "/usr/bin/gcc-${GCC_VERSION}" /usr/bin/gcc; \
    ln -sf "/usr/bin/g++-${GCC_VERSION}" /usr/bin/g++; \
    ln -sf "/usr/bin/gcov-${GCC_VERSION}" /usr/bin/gcov; \
    rm -rf /var/lib/apt/lists/*

# LLVM toolchain via apt.llvm.org
RUN set -eux; \
    tmpdir="$(mktemp -d)"; \
    curl -fsSL https://apt.llvm.org/llvm.sh -o "${tmpdir}/llvm.sh"; \
    chmod +x "${tmpdir}/llvm.sh"; \
    "${tmpdir}/llvm.sh" "${LLVM_VERSION}" all; \
    rm -rf "${tmpdir}"

# Expose full LLVM toolset on PATH (llvm-ar, llvm-nm, opt, lld, etc.)
ENV LLVM_HOME=/usr/lib/llvm-${LLVM_VERSION}
ENV PATH=${LLVM_HOME}/bin:${PATH}

# Default toolchain = Clang+LLVM tools (override per-build if you want GCC)
# No update-alternatives. Explicit, versioned binaries only.
ENV CC=clang-${LLVM_VERSION} \
    CXX=clang++-${LLVM_VERSION} \
    LD=ld.lld-${LLVM_VERSION} \
    AR=${LLVM_HOME}/bin/llvm-ar \
    NM=${LLVM_HOME}/bin/llvm-nm \
    RANLIB=${LLVM_HOME}/bin/llvm-ranlib \
    CLANGD=clangd-${LLVM_VERSION} \
    GCOV=gcov-${GCC_VERSION}

# xmake (system-wide)
RUN set -eux; \
    tmpdir="$(mktemp -d)"; \
    curl -fsSL https://xmake.io/shget.text -o "${tmpdir}/xmake.sh"; \
    XMAKE_ROOT=y prefix=/usr/local bash "${tmpdir}/xmake.sh"; \
    rm -rf "${tmpdir}"; \
    xmake --version || true

# ---------- ci: headless, root-friendly ----------
FROM base AS ci
ENV XMAKE_ROOT=y
USER root
WORKDIR /workspace

# ---------- dev: pick UID 1000 if present; otherwise root ----------
FROM base AS dev

# pre-commit + Node.js + Codex CLI (via npm)
RUN set -eux; \
    apt-get update -y; \
    apt-get install -y --no-install-recommends pre-commit nodejs npm; \
    npm i -g @openai/codex; \
    npm cache clean --force; \
    rm -rf /var/lib/apt/lists/*

ENV XMAKE_ROOT=
USER ubuntu
WORKDIR /workspace
