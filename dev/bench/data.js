window.BENCHMARK_DATA = {
  "lastUpdate": 1761803237563,
  "repoUrl": "https://github.com/3uclid3/ant",
  "entries": {
    "ant benchmarks • dynamic_bitset": [
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3"
          },
          "committer": {
            "name": "3uclid3",
            "username": "3uclid3"
          },
          "id": "fa44426d162b2390ab7c7fb99c9858482cc04879",
          "message": "feat(bench): add CI benchmarks workflow",
          "timestamp": "2025-10-30T04:48:23Z",
          "url": "https://github.com/3uclid3/ant/pull/45/commits/fa44426d162b2390ab7c7fb99c9858482cc04879"
        },
        "date": 1761803236652,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 980.6338087505125,
            "unit": "ns/iter",
            "extra": "iterations: 715353\ncpu: 982.3863980439565 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1320.4445143028845,
            "unit": "ns/iter",
            "extra": "iterations: 529758\ncpu: 1321.8407725790994 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2055.643161690768,
            "unit": "ns/iter",
            "extra": "iterations: 339445\ncpu: 2057.2590817362448 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3505.4526932858244,
            "unit": "ns/iter",
            "extra": "iterations: 199612\ncpu: 3506.918912690571 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6399.855861777343,
            "unit": "ns/iter",
            "extra": "iterations: 109624\ncpu: 6401.138318252049 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12137.754231635578,
            "unit": "ns/iter",
            "extra": "iterations: 55003\ncpu: 12138.448484628834 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23636.379479496438,
            "unit": "ns/iter",
            "extra": "iterations: 29638\ncpu: 23637.90741615261 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46643.39664334461,
            "unit": "ns/iter",
            "extra": "iterations: 15016\ncpu: 46644.93400373373 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92644.84775090274,
            "unit": "ns/iter",
            "extra": "iterations: 7560\ncpu: 92646.3494709014 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184616.45967532773,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 184611.52675006742 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 369352.40326858044,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 369359.296257265 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/64",
            "value": 15.646725574580396,
            "unit": "ns/iter",
            "extra": "iterations: 44866299\ncpu: 15.645379263397691 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.69739982665046,
            "unit": "ns/iter",
            "extra": "iterations: 33716752\ncpu: 20.694947277246616 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.442711226435158,
            "unit": "ns/iter",
            "extra": "iterations: 22926333\ncpu: 30.439996705971204 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.34076298314938,
            "unit": "ns/iter",
            "extra": "iterations: 13862744\ncpu: 50.33778918517139 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 90.71834418424712,
            "unit": "ns/iter",
            "extra": "iterations: 7773232\ncpu: 90.71106355760382 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 169.06482888018152,
            "unit": "ns/iter",
            "extra": "iterations: 4031444\ncpu: 169.05976146512262 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 328.3224590979811,
            "unit": "ns/iter",
            "extra": "iterations: 2122632\ncpu: 328.3129091618337 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 650.2969670249232,
            "unit": "ns/iter",
            "extra": "iterations: 1075116\ncpu: 650.270488021757 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1288.2606934872547,
            "unit": "ns/iter",
            "extra": "iterations: 543485\ncpu: 1288.2301185865274 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2561.1434791234688,
            "unit": "ns/iter",
            "extra": "iterations: 272172\ncpu: 2560.999724438954 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5105.002748313595,
            "unit": "ns/iter",
            "extra": "iterations: 137175\ncpu: 5104.698873701475 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/64",
            "value": 216.56778914686214,
            "unit": "ns/iter",
            "extra": "iterations: 3230495\ncpu: 216.56018195353911 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 440.0321350355901,
            "unit": "ns/iter",
            "extra": "iterations: 1594957\ncpu: 440.01658414615565 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 857.272650324384,
            "unit": "ns/iter",
            "extra": "iterations: 815187\ncpu: 857.2401878342029 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1659.3810764280272,
            "unit": "ns/iter",
            "extra": "iterations: 421115\ncpu: 1659.2407109696805 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3269.9718957207333,
            "unit": "ns/iter",
            "extra": "iterations: 214309\ncpu: 3269.8760434699548 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6486.60946482656,
            "unit": "ns/iter",
            "extra": "iterations: 108021\ncpu: 6486.36346636304 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 13135.124154081994,
            "unit": "ns/iter",
            "extra": "iterations: 54231\ncpu: 13134.901163541093 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25798.422738482528,
            "unit": "ns/iter",
            "extra": "iterations: 27161\ncpu: 25797.702514634955 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51674.14736842086,
            "unit": "ns/iter",
            "extra": "iterations: 13585\ncpu: 51672.68391608398 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103026.96293538596,
            "unit": "ns/iter",
            "extra": "iterations: 6718\ncpu: 103023.39222983012 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206137.2872716555,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 206127.5586328812 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/64",
            "value": 27.34139395745133,
            "unit": "ns/iter",
            "extra": "iterations: 25590078\ncpu: 27.339648437179562 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.21020256627619,
            "unit": "ns/iter",
            "extra": "iterations: 26745173\ncpu: 26.20893067320959 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 29.30761657449279,
            "unit": "ns/iter",
            "extra": "iterations: 23908832\ncpu: 29.306211152430915 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 35.001200428406555,
            "unit": "ns/iter",
            "extra": "iterations: 19984532\ncpu: 34.99963531795467 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 46.51400608724793,
            "unit": "ns/iter",
            "extra": "iterations: 15059345\ncpu: 46.51140225554285 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 67.82660651441888,
            "unit": "ns/iter",
            "extra": "iterations: 10324246\ncpu: 67.8240502986853 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 104.66133048919048,
            "unit": "ns/iter",
            "extra": "iterations: 6671005\ncpu: 104.65653361075313 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 177.35393986836846,
            "unit": "ns/iter",
            "extra": "iterations: 3955056\ncpu: 177.3406553535523 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 332.9465412068303,
            "unit": "ns/iter",
            "extra": "iterations: 2110317\ncpu: 332.9210317691609 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 623.1566995838335,
            "unit": "ns/iter",
            "extra": "iterations: 1124234\ncpu: 623.1126927312238 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1208.3696940929117,
            "unit": "ns/iter",
            "extra": "iterations: 581451\ncpu: 1208.3003382916113 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/64",
            "value": 632.9313449560228,
            "unit": "ns/iter",
            "extra": "iterations: 1099453\ncpu: 636.5445889896407 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 632.2057284045775,
            "unit": "ns/iter",
            "extra": "iterations: 1102162\ncpu: 636.291655857121 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 632.7446065412506,
            "unit": "ns/iter",
            "extra": "iterations: 1100490\ncpu: 636.6752982755756 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 678.8424285179018,
            "unit": "ns/iter",
            "extra": "iterations: 1034083\ncpu: 680.982353447056 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 672.562218255791,
            "unit": "ns/iter",
            "extra": "iterations: 1036391\ncpu: 674.5385998139302 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 673.6398260256108,
            "unit": "ns/iter",
            "extra": "iterations: 1031471\ncpu: 675.5803265386724 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 677.2188184339702,
            "unit": "ns/iter",
            "extra": "iterations: 1031211\ncpu: 679.687990136963 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 675.3269402874765,
            "unit": "ns/iter",
            "extra": "iterations: 1023881\ncpu: 677.4967520644678 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 745.2535674783823,
            "unit": "ns/iter",
            "extra": "iterations: 933925\ncpu: 747.0956051054391 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 767.1113028839687,
            "unit": "ns/iter",
            "extra": "iterations: 911504\ncpu: 768.399847938601 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 801.1279161385147,
            "unit": "ns/iter",
            "extra": "iterations: 869546\ncpu: 803.8533648615444 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/64",
            "value": 617.001261091648,
            "unit": "ns/iter",
            "extra": "iterations: 1129993\ncpu: 618.6741714290495 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 635.3189486215007,
            "unit": "ns/iter",
            "extra": "iterations: 1099757\ncpu: 637.3228886009548 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 641.1865713144488,
            "unit": "ns/iter",
            "extra": "iterations: 1087027\ncpu: 643.0599212324249 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 654.3390524395375,
            "unit": "ns/iter",
            "extra": "iterations: 1068003\ncpu: 656.1238339189729 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 676.6935281065189,
            "unit": "ns/iter",
            "extra": "iterations: 1030858\ncpu: 678.4825446459841 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 731.5871577995674,
            "unit": "ns/iter",
            "extra": "iterations: 979561\ncpu: 734.719165019493 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 787.304643869316,
            "unit": "ns/iter",
            "extra": "iterations: 886343\ncpu: 789.1332294666333 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 945.0480868395837,
            "unit": "ns/iter",
            "extra": "iterations: 736147\ncpu: 946.7570526039277 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1241.227824392105,
            "unit": "ns/iter",
            "extra": "iterations: 566805\ncpu: 1242.827729120703 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1817.3230325447487,
            "unit": "ns/iter",
            "extra": "iterations: 384695\ncpu: 1819.3489803462776 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2989.9365652598867,
            "unit": "ns/iter",
            "extra": "iterations: 233815\ncpu: 2991.8241130924016 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "bm_migrate_sbo_to_heap",
            "value": 670.1876660712389,
            "unit": "ns/iter",
            "extra": "iterations: 1044952\ncpu: 670.1427118232693 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}