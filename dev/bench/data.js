window.BENCHMARK_DATA = {
  "lastUpdate": 1764127616221,
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
      },
      {
        "commit": {
          "author": {
            "email": "3uclid3@nubwork.dev",
            "name": "3uclid3",
            "username": "3uclid3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcdcae83a18c9a75e1daa73508319027897d8831",
          "message": "feat(bench): add CI benchmarks workflow (#45)",
          "timestamp": "2025-10-30T01:53:35-04:00",
          "tree_id": "c8382df1c0ca315febab9e1259bb06023a735159",
          "url": "https://github.com/3uclid3/ant/commit/dcdcae83a18c9a75e1daa73508319027897d8831"
        },
        "date": 1761803763192,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 983.3065860028063,
            "unit": "ns/iter",
            "extra": "iterations: 715150\ncpu: 984.8017087323111 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1327.043690641205,
            "unit": "ns/iter",
            "extra": "iterations: 525284\ncpu: 1328.5587663056083 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2053.555118460409,
            "unit": "ns/iter",
            "extra": "iterations: 341147\ncpu: 2053.9178477313008 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3495.0254135574787,
            "unit": "ns/iter",
            "extra": "iterations: 200090\ncpu: 3495.344215103517 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6367.010196263602,
            "unit": "ns/iter",
            "extra": "iterations: 109844\ncpu: 6368.406212446849 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12117.76249178096,
            "unit": "ns/iter",
            "extra": "iterations: 57838\ncpu: 12119.585877797475 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23621.71202356872,
            "unit": "ns/iter",
            "extra": "iterations: 29683\ncpu: 23623.149445812014 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 47016.410186376685,
            "unit": "ns/iter",
            "extra": "iterations: 15020\ncpu: 47018.02137150891 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92879.583960999,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 92879.5189589121 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184872.55054131593,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 184865.02560043253 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 367913.5338578043,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 367890.2299212629 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.593183963798932,
            "unit": "ns/iter",
            "extra": "iterations: 44846182\ncpu: 15.591879482627967 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.740121864155324,
            "unit": "ns/iter",
            "extra": "iterations: 33813060\ncpu: 20.738108293067842 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.43121927652808,
            "unit": "ns/iter",
            "extra": "iterations: 23070919\ncpu: 30.428115802409085 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.23202318955805,
            "unit": "ns/iter",
            "extra": "iterations: 13877281\ncpu: 50.229852591440576 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 89.99474012211918,
            "unit": "ns/iter",
            "extra": "iterations: 7766340\ncpu: 89.9839122418024 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 169.4276938059121,
            "unit": "ns/iter",
            "extra": "iterations: 4136174\ncpu: 169.40729161780874 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 338.553068322851,
            "unit": "ns/iter",
            "extra": "iterations: 2121501\ncpu: 338.5105946214489 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 650.6381258812984,
            "unit": "ns/iter",
            "extra": "iterations: 1069452\ncpu: 650.6125754124522 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1287.6986489349333,
            "unit": "ns/iter",
            "extra": "iterations: 542905\ncpu: 1287.6149897311673 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2558.6173268447947,
            "unit": "ns/iter",
            "extra": "iterations: 273714\ncpu: 2558.375428366834 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5141.703973909679,
            "unit": "ns/iter",
            "extra": "iterations: 135836\ncpu: 5141.487138902786 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 216.94215557290138,
            "unit": "ns/iter",
            "extra": "iterations: 3234175\ncpu: 216.92972581879403 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 439.26360951666425,
            "unit": "ns/iter",
            "extra": "iterations: 1593205\ncpu: 439.2305754752223 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 861.3261968761869,
            "unit": "ns/iter",
            "extra": "iterations: 813242\ncpu: 861.2496968921904 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1667.9579169397334,
            "unit": "ns/iter",
            "extra": "iterations: 419575\ncpu: 1667.8915116486912 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3290.9690370252724,
            "unit": "ns/iter",
            "extra": "iterations: 213287\ncpu: 3290.8393526093855 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6503.361949968992,
            "unit": "ns/iter",
            "extra": "iterations: 107653\ncpu: 6503.075195303442 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12940.171874133068,
            "unit": "ns/iter",
            "extra": "iterations: 54057\ncpu: 12938.932164197078 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25861.804683754326,
            "unit": "ns/iter",
            "extra": "iterations: 27115\ncpu: 25859.886151576626 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51622.29690493783,
            "unit": "ns/iter",
            "extra": "iterations: 13570\ncpu: 51617.531466470085 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103175.31772673529,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 103168.09054770313 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206382.1670109202,
            "unit": "ns/iter",
            "extra": "iterations: 3389\ncpu: 206369.7494836238 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.316056096183065,
            "unit": "ns/iter",
            "extra": "iterations: 25545481\ncpu: 27.314201208425143 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.178383233175193,
            "unit": "ns/iter",
            "extra": "iterations: 26651821\ncpu: 26.176872529648094 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 29.327338721731582,
            "unit": "ns/iter",
            "extra": "iterations: 23724306\ncpu: 29.326092868638476 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 34.961084164933276,
            "unit": "ns/iter",
            "extra": "iterations: 20002012\ncpu: 34.95551727496237 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 46.49956963280216,
            "unit": "ns/iter",
            "extra": "iterations: 15060395\ncpu: 46.49554165079993 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 67.82300086912464,
            "unit": "ns/iter",
            "extra": "iterations: 10317271\ncpu: 67.81986457465379 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 104.63982953419175,
            "unit": "ns/iter",
            "extra": "iterations: 6688966\ncpu: 104.63492474023593 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 177.0762424391201,
            "unit": "ns/iter",
            "extra": "iterations: 3935223\ncpu: 177.07011673798502 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 331.81245602257,
            "unit": "ns/iter",
            "extra": "iterations: 2109036\ncpu: 331.79977345099815 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 622.5168397722354,
            "unit": "ns/iter",
            "extra": "iterations: 1124362\ncpu: 622.4919358711876 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1215.0544491141504,
            "unit": "ns/iter",
            "extra": "iterations: 573912\ncpu: 1214.9709258562332 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 623.742214012771,
            "unit": "ns/iter",
            "extra": "iterations: 1124103\ncpu: 625.765178992504 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 626.403249941616,
            "unit": "ns/iter",
            "extra": "iterations: 1107653\ncpu: 628.6106957680495 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 624.6530062933122,
            "unit": "ns/iter",
            "extra": "iterations: 1117513\ncpu: 626.6122837061818 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 669.0918494667345,
            "unit": "ns/iter",
            "extra": "iterations: 1048531\ncpu: 671.3955619847517 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 667.1938020177348,
            "unit": "ns/iter",
            "extra": "iterations: 1043854\ncpu: 668.933392027787 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 667.7344562523871,
            "unit": "ns/iter",
            "extra": "iterations: 1053800\ncpu: 669.3543442768142 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 669.0606803736205,
            "unit": "ns/iter",
            "extra": "iterations: 1039644\ncpu: 670.7621339641493 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 673.0372057374017,
            "unit": "ns/iter",
            "extra": "iterations: 1036023\ncpu: 676.4412199409386 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 737.2842138111378,
            "unit": "ns/iter",
            "extra": "iterations: 937509\ncpu: 745.9079155548638 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 765.5918605262597,
            "unit": "ns/iter",
            "extra": "iterations: 898977\ncpu: 771.9256365848435 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 795.6445062368422,
            "unit": "ns/iter",
            "extra": "iterations: 872471\ncpu: 803.1053662538408 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 614.9840504733229,
            "unit": "ns/iter",
            "extra": "iterations: 1132887\ncpu: 616.7243952922264 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 633.9950294259811,
            "unit": "ns/iter",
            "extra": "iterations: 1102693\ncpu: 636.4400871321802 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 642.9594394212639,
            "unit": "ns/iter",
            "extra": "iterations: 1085416\ncpu: 644.5587396894912 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 654.1906754239011,
            "unit": "ns/iter",
            "extra": "iterations: 1068895\ncpu: 655.8963321944233 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 674.8439231847433,
            "unit": "ns/iter",
            "extra": "iterations: 1033523\ncpu: 676.8636343866411 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 712.5337850772842,
            "unit": "ns/iter",
            "extra": "iterations: 980981\ncpu: 714.1277272436024 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 785.8874686981621,
            "unit": "ns/iter",
            "extra": "iterations: 888908\ncpu: 787.8323662364039 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 938.1708759218031,
            "unit": "ns/iter",
            "extra": "iterations: 743528\ncpu: 940.0852731848763 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1228.071480976806,
            "unit": "ns/iter",
            "extra": "iterations: 568725\ncpu: 1230.476418304269 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1810.9773287014575,
            "unit": "ns/iter",
            "extra": "iterations: 386215\ncpu: 1812.509459746614 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 3100.2459847799023,
            "unit": "ns/iter",
            "extra": "iterations: 225583\ncpu: 3101.7450428425273 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 664.2163165563222,
            "unit": "ns/iter",
            "extra": "iterations: 1038811\ncpu: 673.9146976709525 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "b3fef6bee459497b5e0639d1df26eb872d5ffde0",
          "message": "fix(build): update output directory for compile_commands autoupdate to use configuration",
          "timestamp": "2025-10-30T05:53:39Z",
          "url": "https://github.com/3uclid3/ant/pull/46/commits/b3fef6bee459497b5e0639d1df26eb872d5ffde0"
        },
        "date": 1761838096718,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 982.3594450546244,
            "unit": "ns/iter",
            "extra": "iterations: 713728\ncpu: 984.0907376479931 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1328.681409273563,
            "unit": "ns/iter",
            "extra": "iterations: 526026\ncpu: 1330.503583472982 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2051.571707365624,
            "unit": "ns/iter",
            "extra": "iterations: 340851\ncpu: 2053.7405347207573 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3490.554175094221,
            "unit": "ns/iter",
            "extra": "iterations: 197923\ncpu: 3492.024817732931 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6361.216583969638,
            "unit": "ns/iter",
            "extra": "iterations: 109671\ncpu: 6363.182655397131 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12095.282633911356,
            "unit": "ns/iter",
            "extra": "iterations: 57042\ncpu: 12096.517899090828 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23584.745533310997,
            "unit": "ns/iter",
            "extra": "iterations: 29662\ncpu: 23586.407120217867 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46633.17337264787,
            "unit": "ns/iter",
            "extra": "iterations: 15037\ncpu: 46635.278513002224 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92480.29284360757,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 92468.71296541367 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184305.65588039244,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184296.61720598527 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 384566.29742513463,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 384598.3158171063 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.597570723026703,
            "unit": "ns/iter",
            "extra": "iterations: 44370733\ncpu: 15.597010488873364 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.689818566252537,
            "unit": "ns/iter",
            "extra": "iterations: 33287247\ncpu: 20.68925925295054 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.400009479637152,
            "unit": "ns/iter",
            "extra": "iterations: 22996665\ncpu: 30.398170082488065 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.37493268332054,
            "unit": "ns/iter",
            "extra": "iterations: 13958279\ncpu: 50.37178136359072 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 90.09273874677541,
            "unit": "ns/iter",
            "extra": "iterations: 7779456\ncpu: 90.08893603871516 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 170.14618165321136,
            "unit": "ns/iter",
            "extra": "iterations: 4126236\ncpu: 170.1397118342237 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 333.67283236668817,
            "unit": "ns/iter",
            "extra": "iterations: 2122603\ncpu: 333.6469890978196 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 652.8924455193736,
            "unit": "ns/iter",
            "extra": "iterations: 1073363\ncpu: 652.8538434807244 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1287.5453956248932,
            "unit": "ns/iter",
            "extra": "iterations: 541561\ncpu: 1287.5339693958792 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2564.95183444383,
            "unit": "ns/iter",
            "extra": "iterations: 274034\ncpu: 2564.8575687688376 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5105.387090875771,
            "unit": "ns/iter",
            "extra": "iterations: 136725\ncpu: 5105.220208447607 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 216.8410211096389,
            "unit": "ns/iter",
            "extra": "iterations: 3228762\ncpu: 216.8324165732872 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 438.7961540747203,
            "unit": "ns/iter",
            "extra": "iterations: 1598575\ncpu: 438.78872996262174 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 858.9731763014719,
            "unit": "ns/iter",
            "extra": "iterations: 818008\ncpu: 858.9325801214643 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1661.1810479249586,
            "unit": "ns/iter",
            "extra": "iterations: 421347\ncpu: 1661.1157169743744 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3275.8226412899307,
            "unit": "ns/iter",
            "extra": "iterations: 206384\ncpu: 3275.713315954729 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6495.169668764853,
            "unit": "ns/iter",
            "extra": "iterations: 107869\ncpu: 6494.987874180725 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12933.279465077925,
            "unit": "ns/iter",
            "extra": "iterations: 54064\ncpu: 12932.982594702615 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 26069.714038001144,
            "unit": "ns/iter",
            "extra": "iterations: 27105\ncpu: 26069.14550820882 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 52434.82909308827,
            "unit": "ns/iter",
            "extra": "iterations: 13364\ncpu: 52431.91918587257 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103236.54842507796,
            "unit": "ns/iter",
            "extra": "iterations: 6794\ncpu: 103229.42066529262 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206149.72802360685,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 206144.13303834802 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 29.015271035173917,
            "unit": "ns/iter",
            "extra": "iterations: 24319242\ncpu: 29.01312183167544 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.284601420758484,
            "unit": "ns/iter",
            "extra": "iterations: 26771314\ncpu: 26.283931412556157 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 29.1992113396724,
            "unit": "ns/iter",
            "extra": "iterations: 24025806\ncpu: 29.197345346083175 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 35.37401475906412,
            "unit": "ns/iter",
            "extra": "iterations: 20063874\ncpu: 35.35582435376119 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 46.40567145016417,
            "unit": "ns/iter",
            "extra": "iterations: 15055585\ncpu: 46.40376518082805 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 67.76523421965737,
            "unit": "ns/iter",
            "extra": "iterations: 10327293\ncpu: 67.76107204472682 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 104.60261402391747,
            "unit": "ns/iter",
            "extra": "iterations: 6698485\ncpu: 104.59657265784712 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 176.98163984163057,
            "unit": "ns/iter",
            "extra": "iterations: 3957809\ncpu: 176.96697111962686 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 332.36284005144677,
            "unit": "ns/iter",
            "extra": "iterations: 2109497\ncpu: 332.3354695455857 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 623.1194010730447,
            "unit": "ns/iter",
            "extra": "iterations: 1124077\ncpu: 623.0654385776096 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1204.8333516759935,
            "unit": "ns/iter",
            "extra": "iterations: 581524\ncpu: 1204.7476475605529 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 624.3906641250505,
            "unit": "ns/iter",
            "extra": "iterations: 1122161\ncpu: 624.7585426696398 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 624.0914001767737,
            "unit": "ns/iter",
            "extra": "iterations: 1119735\ncpu: 624.5821913222884 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 624.06290088115,
            "unit": "ns/iter",
            "extra": "iterations: 1120922\ncpu: 624.7369121123187 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 670.3657897203184,
            "unit": "ns/iter",
            "extra": "iterations: 1051801\ncpu: 670.4040327010008 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 669.5506044921474,
            "unit": "ns/iter",
            "extra": "iterations: 1048662\ncpu: 668.6368524869002 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 670.5529833774935,
            "unit": "ns/iter",
            "extra": "iterations: 1046885\ncpu: 670.0278273169616 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 675.3789402268517,
            "unit": "ns/iter",
            "extra": "iterations: 1033535\ncpu: 676.1502948634342 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 688.910509182634,
            "unit": "ns/iter",
            "extra": "iterations: 1017412\ncpu: 689.7749210738809 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 755.638238861928,
            "unit": "ns/iter",
            "extra": "iterations: 919933\ncpu: 758.6073268411147 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 781.400230377417,
            "unit": "ns/iter",
            "extra": "iterations: 897648\ncpu: 782.5578010529654 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 814.2634732206542,
            "unit": "ns/iter",
            "extra": "iterations: 845027\ncpu: 817.1648988700433 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 625.1541411232807,
            "unit": "ns/iter",
            "extra": "iterations: 1118793\ncpu: 626.887668229917 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 646.2991967565875,
            "unit": "ns/iter",
            "extra": "iterations: 1066071\ncpu: 648.2390459949394 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 648.9964241021656,
            "unit": "ns/iter",
            "extra": "iterations: 1060430\ncpu: 651.0226238423837 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 657.0433347502207,
            "unit": "ns/iter",
            "extra": "iterations: 1066326\ncpu: 658.8034869139648 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 677.7748125768867,
            "unit": "ns/iter",
            "extra": "iterations: 1022597\ncpu: 679.3635723548687 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 713.5837747957617,
            "unit": "ns/iter",
            "extra": "iterations: 979203\ncpu: 715.3591921237787 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 787.7437311485155,
            "unit": "ns/iter",
            "extra": "iterations: 887751\ncpu: 789.433920104438 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 940.7958625444414,
            "unit": "ns/iter",
            "extra": "iterations: 744101\ncpu: 942.5386164037263 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1230.860184957696,
            "unit": "ns/iter",
            "extra": "iterations: 564431\ncpu: 1232.6238512756536 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1810.6823152824256,
            "unit": "ns/iter",
            "extra": "iterations: 386317\ncpu: 1812.2341341331498 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2974.7782675571743,
            "unit": "ns/iter",
            "extra": "iterations: 235031\ncpu: 2978.532895663801 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 668.6125960890225,
            "unit": "ns/iter",
            "extra": "iterations: 1036146\ncpu: 674.9663744371787 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3uclid3@nubwork.dev",
            "name": "3uclid3",
            "username": "3uclid3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da13bdb69e662be8340d4baa8cbeb08debca3873",
          "message": "fix(build): update output directory for compile_commands autoupdate to use configuration (#46)",
          "timestamp": "2025-10-30T15:27:15Z",
          "tree_id": "126084e9d7d591e3b3622fafffc6ffbc8687182e",
          "url": "https://github.com/3uclid3/ant/commit/da13bdb69e662be8340d4baa8cbeb08debca3873"
        },
        "date": 1761838173383,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 978.5144940723816,
            "unit": "ns/iter",
            "extra": "iterations: 712119\ncpu: 980.1133799265433 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1327.4226550536634,
            "unit": "ns/iter",
            "extra": "iterations: 527300\ncpu: 1329.0946994122983 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2072.976897939557,
            "unit": "ns/iter",
            "extra": "iterations: 341530\ncpu: 2078.3753374521934 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3506.692994602014,
            "unit": "ns/iter",
            "extra": "iterations: 199420\ncpu: 3511.7518704235863 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6405.597050389713,
            "unit": "ns/iter",
            "extra": "iterations: 109639\ncpu: 6408.280976660576 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12504.325232207071,
            "unit": "ns/iter",
            "extra": "iterations: 55754\ncpu: 12507.481956453224 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 24130.85782209757,
            "unit": "ns/iter",
            "extra": "iterations: 28816\ncpu: 24134.199056079302 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 47630.72146860263,
            "unit": "ns/iter",
            "extra": "iterations: 14677\ncpu: 47628.12366287238 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 94573.91036917774,
            "unit": "ns/iter",
            "extra": "iterations: 7397\ncpu: 94582.63133703945 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 189124.3697114743,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 189125.7943950301 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 376692.96987691184,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 376706.7294244057 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.909382964515956,
            "unit": "ns/iter",
            "extra": "iterations: 43604737\ncpu: 15.90754697133017 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.89942680626951,
            "unit": "ns/iter",
            "extra": "iterations: 33154759\ncpu: 20.89805985318729 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.48952030132365,
            "unit": "ns/iter",
            "extra": "iterations: 23026330\ncpu: 30.48718080562551 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 51.41166757022712,
            "unit": "ns/iter",
            "extra": "iterations: 13697642\ncpu: 51.40924036414438 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 93.08828090134051,
            "unit": "ns/iter",
            "extra": "iterations: 7752900\ncpu: 93.08193321208823 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 177.67122033663122,
            "unit": "ns/iter",
            "extra": "iterations: 4120486\ncpu: 177.65588452430086 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 337.0436209992524,
            "unit": "ns/iter",
            "extra": "iterations: 2127943\ncpu: 337.0155619769888 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 651.33959801472,
            "unit": "ns/iter",
            "extra": "iterations: 1074915\ncpu: 651.2747054418237 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1290.6121183083383,
            "unit": "ns/iter",
            "extra": "iterations: 542650\ncpu: 1290.5512429742944 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2569.5026504475018,
            "unit": "ns/iter",
            "extra": "iterations: 273916\ncpu: 2569.21645686999 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5112.5918849399595,
            "unit": "ns/iter",
            "extra": "iterations: 138015\ncpu: 5112.313552874691 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 216.5934214249816,
            "unit": "ns/iter",
            "extra": "iterations: 3233375\ncpu: 216.5839297947194 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 438.9990624996002,
            "unit": "ns/iter",
            "extra": "iterations: 1594666\ncpu: 438.95956833593925 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 860.6009172565573,
            "unit": "ns/iter",
            "extra": "iterations: 814385\ncpu: 860.5671322531726 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1672.293904759244,
            "unit": "ns/iter",
            "extra": "iterations: 419442\ncpu: 1672.244412815122 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3279.8141988707384,
            "unit": "ns/iter",
            "extra": "iterations: 212862\ncpu: 3279.645018838493 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6500.452500742288,
            "unit": "ns/iter",
            "extra": "iterations: 107728\ncpu: 6499.941445121047 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12938.431515330043,
            "unit": "ns/iter",
            "extra": "iterations: 54107\ncpu: 12937.83872696697 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25810.627945628836,
            "unit": "ns/iter",
            "extra": "iterations: 27074\ncpu: 25809.058432444504 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51806.39038220752,
            "unit": "ns/iter",
            "extra": "iterations: 13579\ncpu: 51802.66256719933 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103589.85331763467,
            "unit": "ns/iter",
            "extra": "iterations: 6797\ncpu: 103581.7929969102 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206538.8791013792,
            "unit": "ns/iter",
            "extra": "iterations: 3383\ncpu: 206524.70736033088 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.38086751250671,
            "unit": "ns/iter",
            "extra": "iterations: 25606017\ncpu: 27.379647642973914 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.26038091203504,
            "unit": "ns/iter",
            "extra": "iterations: 26744495\ncpu: 26.25858330845296 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 29.294469724280788,
            "unit": "ns/iter",
            "extra": "iterations: 23902009\ncpu: 29.292291288150814 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 34.93821786880807,
            "unit": "ns/iter",
            "extra": "iterations: 20060072\ncpu: 34.935494199622 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 46.49693112108367,
            "unit": "ns/iter",
            "extra": "iterations: 15057453\ncpu: 46.49416445131857 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 67.90805581456249,
            "unit": "ns/iter",
            "extra": "iterations: 10320533\ncpu: 67.90448739420722 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 104.75682692669635,
            "unit": "ns/iter",
            "extra": "iterations: 6683388\ncpu: 104.74803722303686 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 177.10692889653515,
            "unit": "ns/iter",
            "extra": "iterations: 3951495\ncpu: 177.10338745209097 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 332.179486765546,
            "unit": "ns/iter",
            "extra": "iterations: 2106133\ncpu: 332.1726704818735 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 623.8119536832232,
            "unit": "ns/iter",
            "extra": "iterations: 1107073\ncpu: 623.7320258013644 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1205.3320147556246,
            "unit": "ns/iter",
            "extra": "iterations: 580929\ncpu: 1205.2674698629287 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 623.8751435275133,
            "unit": "ns/iter",
            "extra": "iterations: 1119069\ncpu: 627.0932882605089 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 624.2908939349853,
            "unit": "ns/iter",
            "extra": "iterations: 1114547\ncpu: 627.0000466576523 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 627.1490360356773,
            "unit": "ns/iter",
            "extra": "iterations: 1111664\ncpu: 629.2152763767212 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 670.9417814057721,
            "unit": "ns/iter",
            "extra": "iterations: 1036799\ncpu: 674.5563151595672 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 671.300681858202,
            "unit": "ns/iter",
            "extra": "iterations: 1037003\ncpu: 675.6360000899328 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 673.2347461004499,
            "unit": "ns/iter",
            "extra": "iterations: 1031770\ncpu: 677.69386103388 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 674.9443457240891,
            "unit": "ns/iter",
            "extra": "iterations: 1029876\ncpu: 678.7903058204624 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 678.1956661348329,
            "unit": "ns/iter",
            "extra": "iterations: 1026754\ncpu: 682.1089355391061 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 747.7424293462507,
            "unit": "ns/iter",
            "extra": "iterations: 935980\ncpu: 751.4966847579117 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 768.9369029770518,
            "unit": "ns/iter",
            "extra": "iterations: 908744\ncpu: 772.074231024284 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 804.2851505288318,
            "unit": "ns/iter",
            "extra": "iterations: 871189\ncpu: 807.2507435261341 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 621.691178226748,
            "unit": "ns/iter",
            "extra": "iterations: 1119445\ncpu: 626.6398438516541 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 639.3586007999374,
            "unit": "ns/iter",
            "extra": "iterations: 1086007\ncpu: 644.8399025094809 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 643.4325306685747,
            "unit": "ns/iter",
            "extra": "iterations: 1081565\ncpu: 648.3988211516158 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 654.664823589788,
            "unit": "ns/iter",
            "extra": "iterations: 1060919\ncpu: 659.0529522050813 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 675.6355656191364,
            "unit": "ns/iter",
            "extra": "iterations: 1026407\ncpu: 681.488694059216 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 713.4775274570891,
            "unit": "ns/iter",
            "extra": "iterations: 974570\ncpu: 718.2133074056028 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 788.4377802748836,
            "unit": "ns/iter",
            "extra": "iterations: 884615\ncpu: 792.7644636396436 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 943.5118042238277,
            "unit": "ns/iter",
            "extra": "iterations: 740492\ncpu: 947.6479610812352 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1232.978997419803,
            "unit": "ns/iter",
            "extra": "iterations: 564217\ncpu: 1237.8283851942936 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1814.3139242886919,
            "unit": "ns/iter",
            "extra": "iterations: 385045\ncpu: 1817.9587892304742 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2979.9786897584795,
            "unit": "ns/iter",
            "extra": "iterations: 234911\ncpu: 2983.8745099052453 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 670.1404200960179,
            "unit": "ns/iter",
            "extra": "iterations: 1032986\ncpu: 679.5563240884331 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "a48669cdcd663aee0f9160d1f7db0dd57f00fbec",
          "message": "ci(benchmarks): raise benchmark alert threshold",
          "timestamp": "2025-10-30T15:27:20Z",
          "url": "https://github.com/3uclid3/ant/pull/47/commits/a48669cdcd663aee0f9160d1f7db0dd57f00fbec"
        },
        "date": 1761838469164,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 972.3958326774007,
            "unit": "ns/iter",
            "extra": "iterations: 719693\ncpu: 974.4275045053504 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1325.793698564519,
            "unit": "ns/iter",
            "extra": "iterations: 527626\ncpu: 1328.2130732752362 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2051.4580368130855,
            "unit": "ns/iter",
            "extra": "iterations: 340894\ncpu: 2054.0808286447036 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3491.5961927589333,
            "unit": "ns/iter",
            "extra": "iterations: 200197\ncpu: 3494.1999480511217 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6362.630320630934,
            "unit": "ns/iter",
            "extra": "iterations: 107788\ncpu: 6364.854111775499 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12115.093460058966,
            "unit": "ns/iter",
            "extra": "iterations: 57768\ncpu: 12119.788221852987 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23601.139011478106,
            "unit": "ns/iter",
            "extra": "iterations: 29681\ncpu: 23602.160809948746 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46604.81012313175,
            "unit": "ns/iter",
            "extra": "iterations: 15015\ncpu: 46608.79200798483 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92673.6160253,
            "unit": "ns/iter",
            "extra": "iterations: 7563\ncpu: 92668.46568820915 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184601.3482495385,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 184601.07554620478 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 370326.00319491484,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 370338.0330138431 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.626290820921898,
            "unit": "ns/iter",
            "extra": "iterations: 44879192\ncpu: 15.625402458226043 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.74411470717361,
            "unit": "ns/iter",
            "extra": "iterations: 33754820\ncpu: 20.743135143366178 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.49618123027919,
            "unit": "ns/iter",
            "extra": "iterations: 23018670\ncpu: 30.49514242134754 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.39250732983637,
            "unit": "ns/iter",
            "extra": "iterations: 13918456\ncpu: 50.38955578118714 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 90.17061630384366,
            "unit": "ns/iter",
            "extra": "iterations: 7803375\ncpu: 90.16470117096753 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 169.69908707678013,
            "unit": "ns/iter",
            "extra": "iterations: 4125210\ncpu: 169.6892526683493 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 328.9673886233674,
            "unit": "ns/iter",
            "extra": "iterations: 2128521\ncpu: 328.95294150257456 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 653.3178569700433,
            "unit": "ns/iter",
            "extra": "iterations: 1074628\ncpu: 653.3043239148814 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1286.2328866773025,
            "unit": "ns/iter",
            "extra": "iterations: 542998\ncpu: 1286.1639103643058 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2562.1482321439994,
            "unit": "ns/iter",
            "extra": "iterations: 273382\ncpu: 2561.924826799131 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5102.323586999981,
            "unit": "ns/iter",
            "extra": "iterations: 137385\ncpu: 5101.728128980618 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 216.39773543606145,
            "unit": "ns/iter",
            "extra": "iterations: 3230909\ncpu: 216.3887553007522 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 438.94094536012415,
            "unit": "ns/iter",
            "extra": "iterations: 1580604\ncpu: 438.89861533945253 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 860.788123169852,
            "unit": "ns/iter",
            "extra": "iterations: 812439\ncpu: 860.7457236789485 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1672.2303762746951,
            "unit": "ns/iter",
            "extra": "iterations: 418524\ncpu: 1672.0094044786001 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3278.9968273159852,
            "unit": "ns/iter",
            "extra": "iterations: 213384\ncpu: 3278.7823032654787 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6500.6345685666465,
            "unit": "ns/iter",
            "extra": "iterations: 107618\ncpu: 6500.125081306086 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12946.027616547743,
            "unit": "ns/iter",
            "extra": "iterations: 54098\ncpu: 12945.505989130885 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25832.698371672155,
            "unit": "ns/iter",
            "extra": "iterations: 27083\ncpu: 25831.846065797814 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51585.88405369528,
            "unit": "ns/iter",
            "extra": "iterations: 13558\ncpu: 51582.88110340758 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103349.9546391755,
            "unit": "ns/iter",
            "extra": "iterations: 6790\ncpu: 103343.6222385862 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206208.66853600854,
            "unit": "ns/iter",
            "extra": "iterations: 3388\ncpu: 206189.0752656436 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.372733470535035,
            "unit": "ns/iter",
            "extra": "iterations: 25576493\ncpu: 27.37114286935272 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.23921553983222,
            "unit": "ns/iter",
            "extra": "iterations: 26645075\ncpu: 26.237447070424857 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 29.276234870865522,
            "unit": "ns/iter",
            "extra": "iterations: 23833403\ncpu: 29.275427642456318 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 35.21793642071963,
            "unit": "ns/iter",
            "extra": "iterations: 19857507\ncpu: 35.21519559328387 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 46.655449898742305,
            "unit": "ns/iter",
            "extra": "iterations: 15024114\ncpu: 46.653787038623655 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 67.9627339772184,
            "unit": "ns/iter",
            "extra": "iterations: 10303407\ncpu: 67.95860699281332 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 104.88136910878514,
            "unit": "ns/iter",
            "extra": "iterations: 6663079\ncpu: 104.87554267328989 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 177.37121022585697,
            "unit": "ns/iter",
            "extra": "iterations: 3949048\ncpu: 177.35559456355122 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 332.4109062670306,
            "unit": "ns/iter",
            "extra": "iterations: 2107999\ncpu: 332.39563301500715 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 623.8793618645717,
            "unit": "ns/iter",
            "extra": "iterations: 1123774\ncpu: 623.8070608503164 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1204.7523800838635,
            "unit": "ns/iter",
            "extra": "iterations: 581177\ncpu: 1204.6672752018683 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 625.359308377028,
            "unit": "ns/iter",
            "extra": "iterations: 1121243\ncpu: 625.6147810964835 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 623.1596804246301,
            "unit": "ns/iter",
            "extra": "iterations: 1121991\ncpu: 623.4479100094119 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 622.2705169282548,
            "unit": "ns/iter",
            "extra": "iterations: 1124462\ncpu: 622.7034581895581 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 662.6770074308481,
            "unit": "ns/iter",
            "extra": "iterations: 1059690\ncpu: 662.12874991734 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 665.2109274420739,
            "unit": "ns/iter",
            "extra": "iterations: 1047986\ncpu: 664.6871752134738 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 667.1290852969149,
            "unit": "ns/iter",
            "extra": "iterations: 1054481\ncpu: 666.3735060184501 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 669.54783859961,
            "unit": "ns/iter",
            "extra": "iterations: 1054159\ncpu: 669.735048502815 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 686.5401897101066,
            "unit": "ns/iter",
            "extra": "iterations: 1019129\ncpu: 690.6897223021186 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 753.4431962138146,
            "unit": "ns/iter",
            "extra": "iterations: 921673\ncpu: 755.7797863230587 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 777.4742929453489,
            "unit": "ns/iter",
            "extra": "iterations: 896505\ncpu: 777.2090205839365 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 823.2936580466516,
            "unit": "ns/iter",
            "extra": "iterations: 852638\ncpu: 825.4729814988206 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 615.5240320037625,
            "unit": "ns/iter",
            "extra": "iterations: 1121380\ncpu: 617.2907827826273 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 635.1671433579181,
            "unit": "ns/iter",
            "extra": "iterations: 1102443\ncpu: 637.2177436837412 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 639.1926049427777,
            "unit": "ns/iter",
            "extra": "iterations: 1091244\ncpu: 641.3915430428943 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 652.626078279777,
            "unit": "ns/iter",
            "extra": "iterations: 1070224\ncpu: 654.81016217032 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 671.2267825647826,
            "unit": "ns/iter",
            "extra": "iterations: 1038541\ncpu: 673.102921316381 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 708.3722421572426,
            "unit": "ns/iter",
            "extra": "iterations: 985963\ncpu: 710.2642675260722 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 782.6603628283143,
            "unit": "ns/iter",
            "extra": "iterations: 892367\ncpu: 784.6387047023957 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 939.4014090158613,
            "unit": "ns/iter",
            "extra": "iterations: 744358\ncpu: 941.8274298124313 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1229.5355825711554,
            "unit": "ns/iter",
            "extra": "iterations: 568902\ncpu: 1231.3882496332023 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1810.041227342105,
            "unit": "ns/iter",
            "extra": "iterations: 386224\ncpu: 1812.0908410725003 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2973.2475368932705,
            "unit": "ns/iter",
            "extra": "iterations: 235072\ncpu: 2975.936517327783 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 665.2245355128912,
            "unit": "ns/iter",
            "extra": "iterations: 1051513\ncpu: 666.758901693779 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "1c340c6f3a0d85283eaf4f319bc24a55e43058e1",
          "message": "ci(benchmarks): raise benchmark alert threshold",
          "timestamp": "2025-10-30T15:27:20Z",
          "url": "https://github.com/3uclid3/ant/pull/47/commits/1c340c6f3a0d85283eaf4f319bc24a55e43058e1"
        },
        "date": 1761838939291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 992.0643535582903,
            "unit": "ns/iter",
            "extra": "iterations: 705400\ncpu: 993.6852239863655 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1340.939992011777,
            "unit": "ns/iter",
            "extra": "iterations: 523647\ncpu: 1342.1156294221705 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2067.94726718542,
            "unit": "ns/iter",
            "extra": "iterations: 339504\ncpu: 2069.6791348555516 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3509.5421805368514,
            "unit": "ns/iter",
            "extra": "iterations: 198563\ncpu: 3511.093209710312 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6370.328177984883,
            "unit": "ns/iter",
            "extra": "iterations: 109724\ncpu: 6371.82050417419 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12120.43480519049,
            "unit": "ns/iter",
            "extra": "iterations: 57819\ncpu: 12122.5444922938 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23596.06207359484,
            "unit": "ns/iter",
            "extra": "iterations: 29610\ncpu: 23599.214792298575 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 47442.53881720304,
            "unit": "ns/iter",
            "extra": "iterations: 14491\ncpu: 47441.25691808428 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92571.1896140836,
            "unit": "ns/iter",
            "extra": "iterations: 7568\ncpu: 92571.3356236639 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184334.7539512516,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 184334.01580611215 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 368082.9295850362,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 368073.1213872953 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.638579979423307,
            "unit": "ns/iter",
            "extra": "iterations: 44772647\ncpu: 15.637088957461025 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.877354173791975,
            "unit": "ns/iter",
            "extra": "iterations: 33568040\ncpu: 20.87499073523504 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 31.547012739671526,
            "unit": "ns/iter",
            "extra": "iterations: 23113235\ncpu: 31.54489836667173 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 51.27717005473021,
            "unit": "ns/iter",
            "extra": "iterations: 13968991\ncpu: 51.271356678517456 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 90.0450625850959,
            "unit": "ns/iter",
            "extra": "iterations: 7757278\ncpu: 90.03844325290423 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 169.60697049159847,
            "unit": "ns/iter",
            "extra": "iterations: 4130756\ncpu: 169.5845191533949 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 329.15160290498284,
            "unit": "ns/iter",
            "extra": "iterations: 2126826\ncpu: 329.113732858258 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 653.5138288899154,
            "unit": "ns/iter",
            "extra": "iterations: 1072935\ncpu: 653.4278162237231 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1293.8335323323022,
            "unit": "ns/iter",
            "extra": "iterations: 545229\ncpu: 1293.7583639168129 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2554.13820077273,
            "unit": "ns/iter",
            "extra": "iterations: 272806\ncpu: 2553.9671964692866 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5108.685876641178,
            "unit": "ns/iter",
            "extra": "iterations: 136561\ncpu: 5108.4317704176065 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 216.7432483875136,
            "unit": "ns/iter",
            "extra": "iterations: 3062972\ncpu: 216.72322796290618 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 439.0418327304128,
            "unit": "ns/iter",
            "extra": "iterations: 1598031\ncpu: 439.0109065468693 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 856.9295305050631,
            "unit": "ns/iter",
            "extra": "iterations: 817602\ncpu: 856.8515879364289 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1666.2800688627556,
            "unit": "ns/iter",
            "extra": "iterations: 422289\ncpu: 1666.0341306545972 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3276.2357077561514,
            "unit": "ns/iter",
            "extra": "iterations: 213315\ncpu: 3275.8439490893866 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6504.924642617948,
            "unit": "ns/iter",
            "extra": "iterations: 107448\ncpu: 6504.243606209532 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12947.306005983639,
            "unit": "ns/iter",
            "extra": "iterations: 54146\ncpu: 12946.285856757642 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25826.95542836033,
            "unit": "ns/iter",
            "extra": "iterations: 27080\ncpu: 25823.7092688331 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51599.469933677654,
            "unit": "ns/iter",
            "extra": "iterations: 13570\ncpu: 51597.76462785548 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103184.26112585058,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 103174.57220748598 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206233.70055998323,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 206223.6330680813 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.6167493570702,
            "unit": "ns/iter",
            "extra": "iterations: 25338692\ncpu: 27.61377268408335 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.456671441660106,
            "unit": "ns/iter",
            "extra": "iterations: 26476129\ncpu: 26.455150222300315 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 29.4061952947659,
            "unit": "ns/iter",
            "extra": "iterations: 23824274\ncpu: 29.4035025789243 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 35.22326596344443,
            "unit": "ns/iter",
            "extra": "iterations: 19880939\ncpu: 35.21954501243618 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 47.063333912190686,
            "unit": "ns/iter",
            "extra": "iterations: 14954737\ncpu: 47.05840758015342 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 68.26892154388666,
            "unit": "ns/iter",
            "extra": "iterations: 10220453\ncpu: 68.26233553444222 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 104.98407536088067,
            "unit": "ns/iter",
            "extra": "iterations: 6667969\ncpu: 104.97961193280966 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 178.25532306748013,
            "unit": "ns/iter",
            "extra": "iterations: 3936546\ncpu: 178.24351652438426 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 332.7785483847213,
            "unit": "ns/iter",
            "extra": "iterations: 2106853\ncpu: 332.75883652062964 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 622.6343017474469,
            "unit": "ns/iter",
            "extra": "iterations: 1122316\ncpu: 622.5986335399338 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1204.486945625873,
            "unit": "ns/iter",
            "extra": "iterations: 580993\ncpu: 1204.4054489468886 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 622.9182682776928,
            "unit": "ns/iter",
            "extra": "iterations: 1123236\ncpu: 625.6291108903416 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 623.2983788348305,
            "unit": "ns/iter",
            "extra": "iterations: 1113333\ncpu: 625.7540897428137 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 623.1031118210255,
            "unit": "ns/iter",
            "extra": "iterations: 1110251\ncpu: 625.5894234740531 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 689.5427943289202,
            "unit": "ns/iter",
            "extra": "iterations: 1013277\ncpu: 691.4617917891235 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 693.6563001898912,
            "unit": "ns/iter",
            "extra": "iterations: 1010696\ncpu: 696.2151082000959 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 691.7366367266649,
            "unit": "ns/iter",
            "extra": "iterations: 1012028\ncpu: 693.3011972006341 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 690.853454385535,
            "unit": "ns/iter",
            "extra": "iterations: 1009092\ncpu: 692.9180352242513 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 695.307840857538,
            "unit": "ns/iter",
            "extra": "iterations: 1007683\ncpu: 698.9388845530086 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 757.9458536043725,
            "unit": "ns/iter",
            "extra": "iterations: 922647\ncpu: 759.2581594060705 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 792.399283882921,
            "unit": "ns/iter",
            "extra": "iterations: 884228\ncpu: 793.3488274537717 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 840.4719921363188,
            "unit": "ns/iter",
            "extra": "iterations: 831927\ncpu: 842.7827369472741 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 614.951151664012,
            "unit": "ns/iter",
            "extra": "iterations: 1133509\ncpu: 616.7095806008833 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 632.9610940155035,
            "unit": "ns/iter",
            "extra": "iterations: 1101887\ncpu: 635.7192534248067 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 637.9981605041828,
            "unit": "ns/iter",
            "extra": "iterations: 1091602\ncpu: 640.5216177680345 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 650.0129537065171,
            "unit": "ns/iter",
            "extra": "iterations: 1071739\ncpu: 652.3671705511479 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 671.3364502197638,
            "unit": "ns/iter",
            "extra": "iterations: 1039274\ncpu: 673.9398820763787 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 709.0293474020615,
            "unit": "ns/iter",
            "extra": "iterations: 986561\ncpu: 711.4343623918172 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 781.2486224491707,
            "unit": "ns/iter",
            "extra": "iterations: 890346\ncpu: 783.8978093904221 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 938.126405063459,
            "unit": "ns/iter",
            "extra": "iterations: 744883\ncpu: 940.8558310594923 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1227.9284929452344,
            "unit": "ns/iter",
            "extra": "iterations: 569720\ncpu: 1230.3433949902123 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1806.6434179889172,
            "unit": "ns/iter",
            "extra": "iterations: 386789\ncpu: 1809.164924559734 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2968.687614898212,
            "unit": "ns/iter",
            "extra": "iterations: 235565\ncpu: 2971.5834652863814 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 670.3057193822815,
            "unit": "ns/iter",
            "extra": "iterations: 1030301\ncpu: 680.7332527121306 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "d3e41645a6755999a49f5b30f04874962174578c",
          "message": "ci(benchmarks): raise benchmark alert threshold",
          "timestamp": "2025-10-30T15:27:20Z",
          "url": "https://github.com/3uclid3/ant/pull/47/commits/d3e41645a6755999a49f5b30f04874962174578c"
        },
        "date": 1761839161748,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 974.3505686061101,
            "unit": "ns/iter",
            "extra": "iterations: 716844\ncpu: 975.896973400054 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1321.0678833985426,
            "unit": "ns/iter",
            "extra": "iterations: 529555\ncpu: 1322.4940808795457 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2046.4242696365013,
            "unit": "ns/iter",
            "extra": "iterations: 341019\ncpu: 2047.7982839666245 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3494.8581600328566,
            "unit": "ns/iter",
            "extra": "iterations: 200134\ncpu: 3496.5122517908803 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6368.896919229029,
            "unit": "ns/iter",
            "extra": "iterations: 109875\ncpu: 6371.371704208595 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12120.776183248781,
            "unit": "ns/iter",
            "extra": "iterations: 57766\ncpu: 12121.037219125205 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23610.088792101848,
            "unit": "ns/iter",
            "extra": "iterations: 29631\ncpu: 23611.251392121983 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46635.35972760325,
            "unit": "ns/iter",
            "extra": "iterations: 14978\ncpu: 46637.46441447144 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 93525.40847109337,
            "unit": "ns/iter",
            "extra": "iterations: 7555\ncpu: 93528.43838516535 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184592.53178577923,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 184595.75837509526 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 369093.06378494477,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 369091.64522930596 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.590084183307878,
            "unit": "ns/iter",
            "extra": "iterations: 44928503\ncpu: 15.588843278397214 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.734943279057195,
            "unit": "ns/iter",
            "extra": "iterations: 33659437\ncpu: 20.731933870432844 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.405489327505588,
            "unit": "ns/iter",
            "extra": "iterations: 22958550\ncpu: 30.402994439979878 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.2716997328411,
            "unit": "ns/iter",
            "extra": "iterations: 13956105\ncpu: 50.269001988735354 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 90.11875246922446,
            "unit": "ns/iter",
            "extra": "iterations: 7788377\ncpu: 90.11040438848791 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 169.65689290008774,
            "unit": "ns/iter",
            "extra": "iterations: 4148827\ncpu: 169.65207900931975 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 336.19642226718116,
            "unit": "ns/iter",
            "extra": "iterations: 2132915\ncpu: 336.1559213564543 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 652.7057297328336,
            "unit": "ns/iter",
            "extra": "iterations: 1044115\ncpu: 652.6329005904532 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1288.6794699888776,
            "unit": "ns/iter",
            "extra": "iterations: 542932\ncpu: 1288.4679923084248 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2561.816770458699,
            "unit": "ns/iter",
            "extra": "iterations: 273624\ncpu: 2561.47487062538 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5113.273208656732,
            "unit": "ns/iter",
            "extra": "iterations: 136727\ncpu: 5112.961858301582 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 216.76505042027554,
            "unit": "ns/iter",
            "extra": "iterations: 2854804\ncpu: 216.7396588347221 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 439.81254003819106,
            "unit": "ns/iter",
            "extra": "iterations: 1593791\ncpu: 439.7721006079202 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 863.081670796159,
            "unit": "ns/iter",
            "extra": "iterations: 814869\ncpu: 862.9599849791778 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1678.2028926427752,
            "unit": "ns/iter",
            "extra": "iterations: 419478\ncpu: 1678.0765141437698 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3287.3141519202177,
            "unit": "ns/iter",
            "extra": "iterations: 212480\ncpu: 3286.9305722891577 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6511.149092360248,
            "unit": "ns/iter",
            "extra": "iterations: 107752\ncpu: 6510.665750983756 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12960.186169026993,
            "unit": "ns/iter",
            "extra": "iterations: 49353\ncpu: 12958.76378335664 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25859.673516824343,
            "unit": "ns/iter",
            "extra": "iterations: 27104\ncpu: 25858.621753246764 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51677.05289524084,
            "unit": "ns/iter",
            "extra": "iterations: 13574\ncpu: 51673.40268159713 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103118.88734271,
            "unit": "ns/iter",
            "extra": "iterations: 6755\ncpu: 103107.644707624 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206315.37573616163,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 206312.01148409926 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.5770725405932,
            "unit": "ns/iter",
            "extra": "iterations: 25411372\ncpu: 27.574950852712718 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.695306875267587,
            "unit": "ns/iter",
            "extra": "iterations: 26206804\ncpu: 26.693031015914684 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 47.03003721765192,
            "unit": "ns/iter",
            "extra": "iterations: 15150338\ncpu: 47.02438605660122 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 38.210492367502866,
            "unit": "ns/iter",
            "extra": "iterations: 18326636\ncpu: 38.20847519424732 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 49.28799973750193,
            "unit": "ns/iter",
            "extra": "iterations: 14202006\ncpu: 49.28449403556107 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 71.19854758996227,
            "unit": "ns/iter",
            "extra": "iterations: 9841298\ncpu: 71.19271634696992 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 106.16050317601781,
            "unit": "ns/iter",
            "extra": "iterations: 6609377\ncpu: 106.1464523812153 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 178.39515018051787,
            "unit": "ns/iter",
            "extra": "iterations: 3919816\ncpu: 178.3717909207971 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 333.6592940489595,
            "unit": "ns/iter",
            "extra": "iterations: 2096406\ncpu: 333.59682523327825 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 623.7632295981045,
            "unit": "ns/iter",
            "extra": "iterations: 1124883\ncpu: 623.6966280048665 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1200.0642676864904,
            "unit": "ns/iter",
            "extra": "iterations: 584415\ncpu: 1200.0336678558938 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 619.5365731538232,
            "unit": "ns/iter",
            "extra": "iterations: 1124896\ncpu: 621.9827930796304 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 623.0154524809643,
            "unit": "ns/iter",
            "extra": "iterations: 1117749\ncpu: 625.3550233593405 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 623.2994223104148,
            "unit": "ns/iter",
            "extra": "iterations: 1118584\ncpu: 625.9616515153526 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 663.7206645233891,
            "unit": "ns/iter",
            "extra": "iterations: 1053264\ncpu: 666.1340005941246 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 663.2024366892787,
            "unit": "ns/iter",
            "extra": "iterations: 1051667\ncpu: 665.9323673756921 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 663.5420253969419,
            "unit": "ns/iter",
            "extra": "iterations: 1051495\ncpu: 666.1369849600991 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 669.306734024462,
            "unit": "ns/iter",
            "extra": "iterations: 1042871\ncpu: 671.8986260068376 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 671.9288518485586,
            "unit": "ns/iter",
            "extra": "iterations: 1036232\ncpu: 674.3694664868026 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 742.5157068466696,
            "unit": "ns/iter",
            "extra": "iterations: 937329\ncpu: 746.136697999325 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 773.0462054340804,
            "unit": "ns/iter",
            "extra": "iterations: 899137\ncpu: 777.665788420598 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 805.5116610472088,
            "unit": "ns/iter",
            "extra": "iterations: 862829\ncpu: 813.3173270682239 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 616.0718362966517,
            "unit": "ns/iter",
            "extra": "iterations: 1133981\ncpu: 617.8659783512737 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 635.7158283489742,
            "unit": "ns/iter",
            "extra": "iterations: 1099962\ncpu: 637.6791534612411 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 641.8352590572035,
            "unit": "ns/iter",
            "extra": "iterations: 1084952\ncpu: 643.8579568509194 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 651.6333005244823,
            "unit": "ns/iter",
            "extra": "iterations: 1072205\ncpu: 653.7251430413609 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 673.1901292324869,
            "unit": "ns/iter",
            "extra": "iterations: 1035501\ncpu: 675.3170668126826 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 708.6345689581,
            "unit": "ns/iter",
            "extra": "iterations: 984681\ncpu: 710.7095262324046 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 782.5148745565082,
            "unit": "ns/iter",
            "extra": "iterations: 892598\ncpu: 784.3708029802311 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 941.3166050984082,
            "unit": "ns/iter",
            "extra": "iterations: 742676\ncpu: 943.3266148428444 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1232.0492024871662,
            "unit": "ns/iter",
            "extra": "iterations: 567695\ncpu: 1234.4092972457092 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1810.747750871819,
            "unit": "ns/iter",
            "extra": "iterations: 386372\ncpu: 1813.2646128656013 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2974.636034901589,
            "unit": "ns/iter",
            "extra": "iterations: 235050\ncpu: 2976.8022505617314 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 664.5980389485399,
            "unit": "ns/iter",
            "extra": "iterations: 1040459\ncpu: 672.4926277825655 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3uclid3@nubwork.dev",
            "name": "3uclid3",
            "username": "3uclid3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8366a085d11b9512071b6f859592e00384f67679",
          "message": "ci(benchmarks): raise benchmark alert threshold (#47)\n\nIncreases the benchmarks alert threshold from 10% to 130% to reduce noisy/overly-strict alerts that cause CI failures for minor or expected benchmark variance.",
          "timestamp": "2025-10-30T11:47:49-04:00",
          "tree_id": "55cbe4d70b3e2cd82cfa51e503bac9ebf725bfc0",
          "url": "https://github.com/3uclid3/ant/commit/8366a085d11b9512071b6f859592e00384f67679"
        },
        "date": 1761839426825,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 625.1459907641042,
            "unit": "ns/iter",
            "extra": "iterations: 1116920\ncpu: 627.0864009955981 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 975.797988800542,
            "unit": "ns/iter",
            "extra": "iterations: 720564\ncpu: 977.5262752508829 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 1672.8768989263326,
            "unit": "ns/iter",
            "extra": "iterations: 417933\ncpu: 1674.675483869538 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3007.53090754878,
            "unit": "ns/iter",
            "extra": "iterations: 232969\ncpu: 3009.4489180961914 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 5663.465161837099,
            "unit": "ns/iter",
            "extra": "iterations: 123026\ncpu: 5665.350462504731 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 11219.915215653133,
            "unit": "ns/iter",
            "extra": "iterations: 63349\ncpu: 11222.689766216805 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 22315.547510277673,
            "unit": "ns/iter",
            "extra": "iterations: 31530\ncpu: 22322.781002219166 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 43499.22359056828,
            "unit": "ns/iter",
            "extra": "iterations: 16159\ncpu: 43502.6567856907 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 87610.70423952135,
            "unit": "ns/iter",
            "extra": "iterations: 8020\ncpu: 87619.5253117159 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 175894.57700072325,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 175904.63512835154 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 353702.41426409566,
            "unit": "ns/iter",
            "extra": "iterations: 1977\ncpu: 353729.08801217936 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 11.866505159055299,
            "unit": "ns/iter",
            "extra": "iterations: 58407980\ncpu: 11.86517433063087 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 14.913138894198498,
            "unit": "ns/iter",
            "extra": "iterations: 46882606\ncpu: 14.911243436425007 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 23.127702232862738,
            "unit": "ns/iter",
            "extra": "iterations: 30266174\ncpu: 23.12627195627697 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 37.57790788874073,
            "unit": "ns/iter",
            "extra": "iterations: 18639133\ncpu: 37.57368542839414 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 76.66052275387126,
            "unit": "ns/iter",
            "extra": "iterations: 8990579\ncpu: 76.65478029835461 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 135.26954570326126,
            "unit": "ns/iter",
            "extra": "iterations: 5161032\ncpu: 135.2524146333522 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 255.43929588859976,
            "unit": "ns/iter",
            "extra": "iterations: 2717979\ncpu: 255.4085837307794 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 496.0529602429757,
            "unit": "ns/iter",
            "extra": "iterations: 1411776\ncpu: 496.00192877623783 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 958.2819018714786,
            "unit": "ns/iter",
            "extra": "iterations: 732794\ncpu: 958.1866581877028 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 1892.8824859477995,
            "unit": "ns/iter",
            "extra": "iterations: 375921\ncpu: 1892.650939958129 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 3702.091631781453,
            "unit": "ns/iter",
            "extra": "iterations: 189192\ncpu: 3701.947212355697 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 228.95493670223908,
            "unit": "ns/iter",
            "extra": "iterations: 3058165\ncpu: 228.92582512715896 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 474.2884358720697,
            "unit": "ns/iter",
            "extra": "iterations: 1470046\ncpu: 474.27527846067517 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 936.0986699356586,
            "unit": "ns/iter",
            "extra": "iterations: 755377\ncpu: 936.033551458411 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1850.5162902555678,
            "unit": "ns/iter",
            "extra": "iterations: 382959\ncpu: 1850.368219574422 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3692.833603007547,
            "unit": "ns/iter",
            "extra": "iterations: 187263\ncpu: 3692.3652082899425 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 7334.033596924409,
            "unit": "ns/iter",
            "extra": "iterations: 91556\ncpu: 7333.569847961915 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 14457.251129761007,
            "unit": "ns/iter",
            "extra": "iterations: 48019\ncpu: 14456.341656427676 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 29481.69500562252,
            "unit": "ns/iter",
            "extra": "iterations: 24007\ncpu: 29479.3732661306 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 57948.423693611294,
            "unit": "ns/iter",
            "extra": "iterations: 12037\ncpu: 57944.43017363138 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 116084.33338951954,
            "unit": "ns/iter",
            "extra": "iterations: 5933\ncpu: 116078.34771616408 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 232657.59766005917,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 232636.6740331482 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 22.98993419363809,
            "unit": "ns/iter",
            "extra": "iterations: 30361502\ncpu: 22.987715100524227 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 21.65648095270517,
            "unit": "ns/iter",
            "extra": "iterations: 32212764\ncpu: 21.655778343019573 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 26.87009096070851,
            "unit": "ns/iter",
            "extra": "iterations: 26019806\ncpu: 26.86816830994062 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 31.06008283511068,
            "unit": "ns/iter",
            "extra": "iterations: 22442899\ncpu: 31.05877141807764 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 39.5395361360867,
            "unit": "ns/iter",
            "extra": "iterations: 17745032\ncpu: 39.53703656324772 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 56.58643959412457,
            "unit": "ns/iter",
            "extra": "iterations: 12529212\ncpu: 56.58156929581857 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 93.30952949285373,
            "unit": "ns/iter",
            "extra": "iterations: 7524094\ncpu: 93.30037981981654 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 169.45121202785882,
            "unit": "ns/iter",
            "extra": "iterations: 4135466\ncpu: 169.44728526361888 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 323.8066107518485,
            "unit": "ns/iter",
            "extra": "iterations: 2171160\ncpu: 323.77286657823316 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 614.4147850655486,
            "unit": "ns/iter",
            "extra": "iterations: 1137905\ncpu: 614.3804482799522 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1189.3915026631103,
            "unit": "ns/iter",
            "extra": "iterations: 592162\ncpu: 1189.2920822342523 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 261.49307536995417,
            "unit": "ns/iter",
            "extra": "iterations: 2658115\ncpu: 262.7227603019817 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 261.7864356581601,
            "unit": "ns/iter",
            "extra": "iterations: 2663085\ncpu: 262.9088354329229 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 262.9714139572657,
            "unit": "ns/iter",
            "extra": "iterations: 2658184\ncpu: 264.159663891887 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 294.9888150894056,
            "unit": "ns/iter",
            "extra": "iterations: 2354334\ncpu: 297.6260675006468 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 296.89469360827525,
            "unit": "ns/iter",
            "extra": "iterations: 2339051\ncpu: 299.33424025324774 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 296.8425421954264,
            "unit": "ns/iter",
            "extra": "iterations: 2337820\ncpu: 299.44629312817773 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 300.57932559164317,
            "unit": "ns/iter",
            "extra": "iterations: 2312337\ncpu: 302.9449210910565 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 305.8894066352655,
            "unit": "ns/iter",
            "extra": "iterations: 2268635\ncpu: 308.149252747076 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 352.0217812636853,
            "unit": "ns/iter",
            "extra": "iterations: 1961319\ncpu: 355.4571326746314 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 360.536737742533,
            "unit": "ns/iter",
            "extra": "iterations: 1924506\ncpu: 363.566036686655 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 365.5181047492522,
            "unit": "ns/iter",
            "extra": "iterations: 1902042\ncpu: 368.2881161389186 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 253.9411764682223,
            "unit": "ns/iter",
            "extra": "iterations: 2741794\ncpu: 255.87407952593034 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 272.69005458005563,
            "unit": "ns/iter",
            "extra": "iterations: 2571514\ncpu: 274.99610540502357 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 276.23521647047005,
            "unit": "ns/iter",
            "extra": "iterations: 2499336\ncpu: 278.0648896376282 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 286.14751408301987,
            "unit": "ns/iter",
            "extra": "iterations: 2435137\ncpu: 287.7867540968462 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 306.05513832171255,
            "unit": "ns/iter",
            "extra": "iterations: 2276040\ncpu: 307.8461055217997 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 344.33577320351054,
            "unit": "ns/iter",
            "extra": "iterations: 2021019\ncpu: 346.0707979422577 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 424.82319856231265,
            "unit": "ns/iter",
            "extra": "iterations: 1639749\ncpu: 426.3053577044593 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 583.658920814593,
            "unit": "ns/iter",
            "extra": "iterations: 1200384\ncpu: 585.1993820297698 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 874.5108500611426,
            "unit": "ns/iter",
            "extra": "iterations: 800779\ncpu: 876.0523302866419 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1457.5554927595604,
            "unit": "ns/iter",
            "extra": "iterations: 481279\ncpu: 1458.952007035912 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2617.717317469656,
            "unit": "ns/iter",
            "extra": "iterations: 266985\ncpu: 2619.4688390748693 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 294.9264801358512,
            "unit": "ns/iter",
            "extra": "iterations: 2351011\ncpu: 297.8065734349137 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "704d8fdef5b6bbc0aaedbdf2482a65234a04a3c7",
          "message": "chore(docs): move Copilot instructions into instructions folder",
          "timestamp": "2025-10-30T15:47:53Z",
          "url": "https://github.com/3uclid3/ant/pull/48/commits/704d8fdef5b6bbc0aaedbdf2482a65234a04a3c7"
        },
        "date": 1761843840240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 981.9663785958195,
            "unit": "ns/iter",
            "extra": "iterations: 708804\ncpu: 983.4322887567866 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1332.9550498922565,
            "unit": "ns/iter",
            "extra": "iterations: 524804\ncpu: 1334.4398156263026 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2061.756951918778,
            "unit": "ns/iter",
            "extra": "iterations: 339007\ncpu: 2063.9582958465185 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3512.187285481634,
            "unit": "ns/iter",
            "extra": "iterations: 200117\ncpu: 3513.2647351292135 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6368.149391225744,
            "unit": "ns/iter",
            "extra": "iterations: 110060\ncpu: 6369.763737960336 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12107.809439821434,
            "unit": "ns/iter",
            "extra": "iterations: 57798\ncpu: 12110.12349908271 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23612.092197109512,
            "unit": "ns/iter",
            "extra": "iterations: 29643\ncpu: 23612.475626624193 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46591.428457469556,
            "unit": "ns/iter",
            "extra": "iterations: 15033\ncpu: 46590.35335594526 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92527.74926815127,
            "unit": "ns/iter",
            "extra": "iterations: 7514\ncpu: 92525.69776418849 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184312.17755534462,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 184315.674130654 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 368471.2575036256,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 368464.7777777924 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.607804940002877,
            "unit": "ns/iter",
            "extra": "iterations: 44879525\ncpu: 15.60678895331443 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.73987554959019,
            "unit": "ns/iter",
            "extra": "iterations: 33733115\ncpu: 20.738269827734555 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.382168264691238,
            "unit": "ns/iter",
            "extra": "iterations: 22935816\ncpu: 30.37826158005453 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.179751970862725,
            "unit": "ns/iter",
            "extra": "iterations: 13925622\ncpu: 50.17587738630271 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 89.96047277893827,
            "unit": "ns/iter",
            "extra": "iterations: 7768874\ncpu: 89.95177692417204 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 169.45649302872243,
            "unit": "ns/iter",
            "extra": "iterations: 4110008\ncpu: 169.4468952371873 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 329.08001908757507,
            "unit": "ns/iter",
            "extra": "iterations: 2131229\ncpu: 329.05860562145176 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 650.7557190191482,
            "unit": "ns/iter",
            "extra": "iterations: 1069895\ncpu: 650.6875459741374 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1289.7218505792177,
            "unit": "ns/iter",
            "extra": "iterations: 542187\ncpu: 1289.5271778924996 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2570.3246434847383,
            "unit": "ns/iter",
            "extra": "iterations: 273691\ncpu: 2570.0564212926274 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5110.219113551001,
            "unit": "ns/iter",
            "extra": "iterations: 136071\ncpu: 5109.8411785023945 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 222.43076049223467,
            "unit": "ns/iter",
            "extra": "iterations: 3235891\ncpu: 222.41148450303186 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 438.77932597492827,
            "unit": "ns/iter",
            "extra": "iterations: 1594184\ncpu: 438.7325333838501 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 859.7421683394424,
            "unit": "ns/iter",
            "extra": "iterations: 812216\ncpu: 859.6667979946226 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1669.5000345184906,
            "unit": "ns/iter",
            "extra": "iterations: 420065\ncpu: 1669.3541475724041 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3279.71677502637,
            "unit": "ns/iter",
            "extra": "iterations: 213025\ncpu: 3279.6186081445817 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6522.285926118143,
            "unit": "ns/iter",
            "extra": "iterations: 107902\ncpu: 6522.138913087786 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12964.220403255436,
            "unit": "ns/iter",
            "extra": "iterations: 54060\ncpu: 12962.5634295228 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25831.61845983792,
            "unit": "ns/iter",
            "extra": "iterations: 27140\ncpu: 25829.303500368474 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51683.18634045533,
            "unit": "ns/iter",
            "extra": "iterations: 13529\ncpu: 51676.52428117393 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103305.9129217607,
            "unit": "ns/iter",
            "extra": "iterations: 6787\ncpu: 103298.41152202766 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206221.1098317095,
            "unit": "ns/iter",
            "extra": "iterations: 3387\ncpu: 206205.1594331265 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.335506601139084,
            "unit": "ns/iter",
            "extra": "iterations: 25610128\ncpu: 27.332632542875164 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.289807186489604,
            "unit": "ns/iter",
            "extra": "iterations: 26656016\ncpu: 26.288230094099696 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 32.80971244246313,
            "unit": "ns/iter",
            "extra": "iterations: 21469512\ncpu: 32.808073280846145 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 36.06561508404646,
            "unit": "ns/iter",
            "extra": "iterations: 19392675\ncpu: 36.062321572449676 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 47.566803101849516,
            "unit": "ns/iter",
            "extra": "iterations: 14709549\ncpu: 47.56136479779225 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 68.84340515412046,
            "unit": "ns/iter",
            "extra": "iterations: 10129797\ncpu: 68.83959244198111 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 105.26596231768384,
            "unit": "ns/iter",
            "extra": "iterations: 6626450\ncpu: 105.25866595235735 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 177.45827873939555,
            "unit": "ns/iter",
            "extra": "iterations: 3944272\ncpu: 177.4512799827194 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 331.9480928227096,
            "unit": "ns/iter",
            "extra": "iterations: 2096685\ncpu: 331.92826342536114 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 624.4290500822976,
            "unit": "ns/iter",
            "extra": "iterations: 1122792\ncpu: 624.4118634617939 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1205.8411644420787,
            "unit": "ns/iter",
            "extra": "iterations: 581463\ncpu: 1205.7782180465492 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 623.1667831664522,
            "unit": "ns/iter",
            "extra": "iterations: 1121786\ncpu: 624.0891694176331 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 625.1807796275201,
            "unit": "ns/iter",
            "extra": "iterations: 1117449\ncpu: 626.1919103218135 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 626.0414671810187,
            "unit": "ns/iter",
            "extra": "iterations: 1116425\ncpu: 626.9618818980167 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 668.5487091250164,
            "unit": "ns/iter",
            "extra": "iterations: 1042033\ncpu: 670.5808482087778 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 669.0536066279443,
            "unit": "ns/iter",
            "extra": "iterations: 1046643\ncpu: 670.6035238369573 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 671.67401218221,
            "unit": "ns/iter",
            "extra": "iterations: 1032422\ncpu: 673.3373581754789 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 668.3613089172441,
            "unit": "ns/iter",
            "extra": "iterations: 1048510\ncpu: 668.1078787957521 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 670.5631077248195,
            "unit": "ns/iter",
            "extra": "iterations: 1042923\ncpu: 670.2984899170592 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 737.0159885889408,
            "unit": "ns/iter",
            "extra": "iterations: 945236\ncpu: 741.0885249788255 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 763.9795752962276,
            "unit": "ns/iter",
            "extra": "iterations: 912181\ncpu: 768.1427041337233 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 795.1719047941763,
            "unit": "ns/iter",
            "extra": "iterations: 874036\ncpu: 799.5780974700918 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 616.9917910472126,
            "unit": "ns/iter",
            "extra": "iterations: 1133156\ncpu: 618.7693221452043 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 635.7045188843042,
            "unit": "ns/iter",
            "extra": "iterations: 1100006\ncpu: 637.9296758378351 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 639.3127431541319,
            "unit": "ns/iter",
            "extra": "iterations: 1092689\ncpu: 641.5739583686977 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 650.098429809106,
            "unit": "ns/iter",
            "extra": "iterations: 1072033\ncpu: 652.431663026077 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 672.8934948486599,
            "unit": "ns/iter",
            "extra": "iterations: 1039452\ncpu: 674.9494791426256 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 709.8657735279829,
            "unit": "ns/iter",
            "extra": "iterations: 984992\ncpu: 711.4908466256107 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 783.9334414475393,
            "unit": "ns/iter",
            "extra": "iterations: 894100\ncpu: 784.7195369696905 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 938.5991570186743,
            "unit": "ns/iter",
            "extra": "iterations: 746150\ncpu: 939.4041694077843 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1230.0490044509945,
            "unit": "ns/iter",
            "extra": "iterations: 567989\ncpu: 1231.6675375819789 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1816.1580214040205,
            "unit": "ns/iter",
            "extra": "iterations: 385587\ncpu: 1815.7148633129498 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2974.1701513556386,
            "unit": "ns/iter",
            "extra": "iterations: 234215\ncpu: 2975.023811455426 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 664.3309894675999,
            "unit": "ns/iter",
            "extra": "iterations: 1033332\ncpu: 677.816489763096 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3uclid3@nubwork.dev",
            "name": "3uclid3",
            "username": "3uclid3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7822b4fae94cbfbbd468044c9cee7b531c69d8fd",
          "message": "chore(docs): move Copilot instructions into instructions folder (#48)\n\nOrganizes repository metadata by relocating the Copilot instructions file into a dedicated instructions directory under the GitHub config. Improves repo structure and discoverability of guidance files without changing behavior.\n\nNo functional changes; purely a file move for better organization.",
          "timestamp": "2025-10-30T17:03:55Z",
          "tree_id": "91d9597a7f7d20b1be5ce808a2d2c6b538710b0d",
          "url": "https://github.com/3uclid3/ant/commit/7822b4fae94cbfbbd468044c9cee7b531c69d8fd"
        },
        "date": 1761843967241,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 973.1612584026725,
            "unit": "ns/iter",
            "extra": "iterations: 712186\ncpu: 974.6701802619673 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1324.5878073793208,
            "unit": "ns/iter",
            "extra": "iterations: 530240\ncpu: 1326.136623038542 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2054.2573887318536,
            "unit": "ns/iter",
            "extra": "iterations: 340582\ncpu: 2055.669903283101 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3504.3938320177554,
            "unit": "ns/iter",
            "extra": "iterations: 200060\ncpu: 3505.8844596628487 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6368.376031552367,
            "unit": "ns/iter",
            "extra": "iterations: 109685\ncpu: 6368.504736289427 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12106.595854127952,
            "unit": "ns/iter",
            "extra": "iterations: 57937\ncpu: 12105.448797831288 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23608.563691770603,
            "unit": "ns/iter",
            "extra": "iterations: 29690\ncpu: 23603.977635569307 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46566.97231284353,
            "unit": "ns/iter",
            "extra": "iterations: 15025\ncpu: 46570.54875207369 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 101485.94627505967,
            "unit": "ns/iter",
            "extra": "iterations: 7557\ncpu: 101534.10824401904 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184437.6172291105,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 184422.62776606472 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 367754.4971072076,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 367747.98316678655 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.696261518933376,
            "unit": "ns/iter",
            "extra": "iterations: 44894891\ncpu: 15.695432359998371 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.75486930707302,
            "unit": "ns/iter",
            "extra": "iterations: 33827041\ncpu: 20.753746004564835 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 31.00126038512105,
            "unit": "ns/iter",
            "extra": "iterations: 23015981\ncpu: 30.94921889273371 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.34193273561064,
            "unit": "ns/iter",
            "extra": "iterations: 13988918\ncpu: 50.33999770389675 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 93.39095508014007,
            "unit": "ns/iter",
            "extra": "iterations: 7468546\ncpu: 93.38163372094107 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 169.72623643111496,
            "unit": "ns/iter",
            "extra": "iterations: 4123865\ncpu: 169.71190764004226 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 328.76511400403956,
            "unit": "ns/iter",
            "extra": "iterations: 2127249\ncpu: 328.7430131592497 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 652.8546137504519,
            "unit": "ns/iter",
            "extra": "iterations: 1069943\ncpu: 652.8081533315333 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1286.5629961330121,
            "unit": "ns/iter",
            "extra": "iterations: 543327\ncpu: 1286.475487137578 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2627.6364442658187,
            "unit": "ns/iter",
            "extra": "iterations: 273980\ncpu: 2627.4728739324028 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5116.770405300057,
            "unit": "ns/iter",
            "extra": "iterations: 137207\ncpu: 5116.485164751067 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 217.03442826391466,
            "unit": "ns/iter",
            "extra": "iterations: 3220813\ncpu: 217.02762501269103 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 444.27300951649295,
            "unit": "ns/iter",
            "extra": "iterations: 1595655\ncpu: 444.2246055695005 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 858.2402129110558,
            "unit": "ns/iter",
            "extra": "iterations: 816867\ncpu: 858.2218610863222 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1657.6596077389868,
            "unit": "ns/iter",
            "extra": "iterations: 422066\ncpu: 1657.627762008782 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3272.020331533195,
            "unit": "ns/iter",
            "extra": "iterations: 213855\ncpu: 3271.940207149701 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6491.126596603488,
            "unit": "ns/iter",
            "extra": "iterations: 107807\ncpu: 6490.866780450274 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12936.56601087183,
            "unit": "ns/iter",
            "extra": "iterations: 54082\ncpu: 12936.47522280976 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25805.296364575937,
            "unit": "ns/iter",
            "extra": "iterations: 27122\ncpu: 25804.345181033877 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51604.916574626375,
            "unit": "ns/iter",
            "extra": "iterations: 13581\ncpu: 51602.67115823578 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103238.07517688279,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 103235.4976415095 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206319.72657631888,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 206313.96611667657 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.42255368571394,
            "unit": "ns/iter",
            "extra": "iterations: 25529743\ncpu: 27.42131528703612 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.376183881603502,
            "unit": "ns/iter",
            "extra": "iterations: 26575187\ncpu: 26.37474110718403 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 32.25006637999591,
            "unit": "ns/iter",
            "extra": "iterations: 21444714\ncpu: 32.24723463320636 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 36.12226318571914,
            "unit": "ns/iter",
            "extra": "iterations: 19386637\ncpu: 36.11997681702108 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 47.75885247151434,
            "unit": "ns/iter",
            "extra": "iterations: 14692620\ncpu: 47.755087860435985 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 71.98187939677727,
            "unit": "ns/iter",
            "extra": "iterations: 10132996\ncpu: 71.97479047657718 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 105.09400725274949,
            "unit": "ns/iter",
            "extra": "iterations: 6653476\ncpu: 105.09141251880995 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 177.56295550365735,
            "unit": "ns/iter",
            "extra": "iterations: 3945358\ncpu: 177.55890035834517 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 333.6744552764018,
            "unit": "ns/iter",
            "extra": "iterations: 2097807\ncpu: 333.6691997881607 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 624.7134087776957,
            "unit": "ns/iter",
            "extra": "iterations: 1120296\ncpu: 624.6867908124294 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1206.454132171597,
            "unit": "ns/iter",
            "extra": "iterations: 580276\ncpu: 1206.3650056180109 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 625.2878562703033,
            "unit": "ns/iter",
            "extra": "iterations: 1119385\ncpu: 627.0110498151613 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 626.9844467973342,
            "unit": "ns/iter",
            "extra": "iterations: 1116041\ncpu: 628.5278354446367 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 627.273629041814,
            "unit": "ns/iter",
            "extra": "iterations: 1110953\ncpu: 628.8691123756441 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 670.8378507836876,
            "unit": "ns/iter",
            "extra": "iterations: 1038414\ncpu: 674.9837935580625 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 677.8737046935112,
            "unit": "ns/iter",
            "extra": "iterations: 1039801\ncpu: 681.0460818959916 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 698.9716712373468,
            "unit": "ns/iter",
            "extra": "iterations: 941128\ncpu: 702.5456197158737 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 676.3959773631152,
            "unit": "ns/iter",
            "extra": "iterations: 1030170\ncpu: 680.1074307999069 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 677.7729974271573,
            "unit": "ns/iter",
            "extra": "iterations: 1029420\ncpu: 681.3757475083474 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 742.4431078856671,
            "unit": "ns/iter",
            "extra": "iterations: 929681\ncpu: 745.7431947090267 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 772.3836734230762,
            "unit": "ns/iter",
            "extra": "iterations: 904647\ncpu: 773.8596413861897 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 807.3068716413105,
            "unit": "ns/iter",
            "extra": "iterations: 858297\ncpu: 814.7168171402985 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 616.0971745114774,
            "unit": "ns/iter",
            "extra": "iterations: 1131665\ncpu: 618.0954399061618 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 633.4205218264641,
            "unit": "ns/iter",
            "extra": "iterations: 1103460\ncpu: 635.3056159758842 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 641.2944255637556,
            "unit": "ns/iter",
            "extra": "iterations: 1090245\ncpu: 643.3068090184516 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 651.4024729994966,
            "unit": "ns/iter",
            "extra": "iterations: 1074000\ncpu: 653.6481862176428 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 671.7553459577877,
            "unit": "ns/iter",
            "extra": "iterations: 1036153\ncpu: 673.9432873343052 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 708.6680974971595,
            "unit": "ns/iter",
            "extra": "iterations: 984485\ncpu: 710.6594544433625 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 782.3670925891181,
            "unit": "ns/iter",
            "extra": "iterations: 894025\ncpu: 784.6794105278174 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 937.6532113521545,
            "unit": "ns/iter",
            "extra": "iterations: 745852\ncpu: 939.848932490587 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1227.503091016745,
            "unit": "ns/iter",
            "extra": "iterations: 568265\ncpu: 1229.8379963404998 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1810.8152136297163,
            "unit": "ns/iter",
            "extra": "iterations: 385878\ncpu: 1812.9839145941348 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2974.432285013171,
            "unit": "ns/iter",
            "extra": "iterations: 235199\ncpu: 2976.7521970900534 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 681.2466253977826,
            "unit": "ns/iter",
            "extra": "iterations: 1023382\ncpu: 686.7148396173656 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "111f34d71403205a2f6682283504b769441ffbd1",
          "message": "fix(github): rename copilot instructions",
          "timestamp": "2025-10-30T17:03:59Z",
          "url": "https://github.com/3uclid3/ant/pull/49/commits/111f34d71403205a2f6682283504b769441ffbd1"
        },
        "date": 1761844668458,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 973.007913324855,
            "unit": "ns/iter",
            "extra": "iterations: 721313\ncpu: 974.3453535428797 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1321.3217888284044,
            "unit": "ns/iter",
            "extra": "iterations: 529891\ncpu: 1322.770767950357 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2077.0128723248777,
            "unit": "ns/iter",
            "extra": "iterations: 337002\ncpu: 2078.4008522204126 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3495.856169391423,
            "unit": "ns/iter",
            "extra": "iterations: 199874\ncpu: 3497.417793210352 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6370.805362713583,
            "unit": "ns/iter",
            "extra": "iterations: 109907\ncpu: 6373.0366855628245 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12114.728536037488,
            "unit": "ns/iter",
            "extra": "iterations: 57713\ncpu: 12116.367698786877 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23635.65078181173,
            "unit": "ns/iter",
            "extra": "iterations: 29546\ncpu: 23637.18479658883 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46609.97643928267,
            "unit": "ns/iter",
            "extra": "iterations: 15025\ncpu: 46611.134109821614 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92584.29744141932,
            "unit": "ns/iter",
            "extra": "iterations: 7504\ncpu: 92583.65951492825 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184544.4188439284,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 184536.63050938025 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 368357.79052632226,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 368351.0321052967 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.610273501365958,
            "unit": "ns/iter",
            "extra": "iterations: 44833926\ncpu: 15.609279923422289 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.717121322462482,
            "unit": "ns/iter",
            "extra": "iterations: 33816681\ncpu: 20.715925522081797 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.39517448634818,
            "unit": "ns/iter",
            "extra": "iterations: 22983460\ncpu: 30.39445314152003 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 51.5909944653919,
            "unit": "ns/iter",
            "extra": "iterations: 13944980\ncpu: 51.587888186286484 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 89.98380211172093,
            "unit": "ns/iter",
            "extra": "iterations: 7775458\ncpu: 89.9821735259841 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 169.44171335215745,
            "unit": "ns/iter",
            "extra": "iterations: 4127978\ncpu: 169.43216727414705 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 329.8135663665446,
            "unit": "ns/iter",
            "extra": "iterations: 2124504\ncpu: 329.80274972417067 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 655.7208873715691,
            "unit": "ns/iter",
            "extra": "iterations: 1073237\ncpu: 655.6996534782141 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1286.1933709283896,
            "unit": "ns/iter",
            "extra": "iterations: 543334\ncpu: 1286.1323348069527 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2562.2261931747234,
            "unit": "ns/iter",
            "extra": "iterations: 273514\ncpu: 2562.055708300118 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5108.835802387603,
            "unit": "ns/iter",
            "extra": "iterations: 136287\ncpu: 5108.498822338159 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 216.879804782212,
            "unit": "ns/iter",
            "extra": "iterations: 3233107\ncpu: 216.87541210358856 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 439.10290879207116,
            "unit": "ns/iter",
            "extra": "iterations: 1595267\ncpu: 439.06011846292705 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 861.0959074281415,
            "unit": "ns/iter",
            "extra": "iterations: 815453\ncpu: 861.0874851156356 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1668.411545099974,
            "unit": "ns/iter",
            "extra": "iterations: 419468\ncpu: 1668.2614955133645 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3354.7232660101913,
            "unit": "ns/iter",
            "extra": "iterations: 208695\ncpu: 3354.581882651716 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6610.773988669845,
            "unit": "ns/iter",
            "extra": "iterations: 107853\ncpu: 6610.403215487751 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12937.584296599045,
            "unit": "ns/iter",
            "extra": "iterations: 53810\ncpu: 12937.25038097008 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25927.847347421088,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 25926.64086744492 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51615.79171580154,
            "unit": "ns/iter",
            "extra": "iterations: 13568\ncpu: 51611.47707841964 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103049.63932253377,
            "unit": "ns/iter",
            "extra": "iterations: 6790\ncpu: 103045.27643593536 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206207.42503681994,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 206190.9136966122 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.346939474721072,
            "unit": "ns/iter",
            "extra": "iterations: 25655743\ncpu: 27.345378498685594 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.26430563685349,
            "unit": "ns/iter",
            "extra": "iterations: 26765411\ncpu: 26.261884900627788 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 29.261759986840747,
            "unit": "ns/iter",
            "extra": "iterations: 23806553\ncpu: 29.2605680881225 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 34.930865129581434,
            "unit": "ns/iter",
            "extra": "iterations: 20032814\ncpu: 34.92819655790769 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 151.20288518516836,
            "unit": "ns/iter",
            "extra": "iterations: 4510837\ncpu: 151.20127395425678 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 67.84735138007247,
            "unit": "ns/iter",
            "extra": "iterations: 10328662\ncpu: 67.84271467107682 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 104.6342195235541,
            "unit": "ns/iter",
            "extra": "iterations: 6669298\ncpu: 104.63427305242588 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 180.05686836935803,
            "unit": "ns/iter",
            "extra": "iterations: 3949278\ncpu: 179.98786487049182 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 332.01608249481563,
            "unit": "ns/iter",
            "extra": "iterations: 2103405\ncpu: 332.0019620567594 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 624.5972365819616,
            "unit": "ns/iter",
            "extra": "iterations: 1123898\ncpu: 624.5483406857154 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1204.2865142267779,
            "unit": "ns/iter",
            "extra": "iterations: 581650\ncpu: 1204.1348027164065 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 624.4882830465222,
            "unit": "ns/iter",
            "extra": "iterations: 1116459\ncpu: 627.1178986419802 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 621.7695459573192,
            "unit": "ns/iter",
            "extra": "iterations: 1121421\ncpu: 624.4923752977907 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 621.831358045305,
            "unit": "ns/iter",
            "extra": "iterations: 1122787\ncpu: 624.4421755867309 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 673.0750745327093,
            "unit": "ns/iter",
            "extra": "iterations: 1036037\ncpu: 676.1068523664835 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 705.9871266632852,
            "unit": "ns/iter",
            "extra": "iterations: 981020\ncpu: 713.624765039276 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 669.1709943848596,
            "unit": "ns/iter",
            "extra": "iterations: 1042005\ncpu: 672.5933762306114 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 670.398661272365,
            "unit": "ns/iter",
            "extra": "iterations: 1039494\ncpu: 674.1767542663645 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 668.8610452112147,
            "unit": "ns/iter",
            "extra": "iterations: 1035495\ncpu: 671.5204341862851 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 735.3268331006228,
            "unit": "ns/iter",
            "extra": "iterations: 953043\ncpu: 735.4401564236659 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 762.8230011723489,
            "unit": "ns/iter",
            "extra": "iterations: 917040\ncpu: 762.8574794999192 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 792.3086511780007,
            "unit": "ns/iter",
            "extra": "iterations: 884526\ncpu: 792.0993503885855 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 614.0173535271432,
            "unit": "ns/iter",
            "extra": "iterations: 1137866\ncpu: 615.5840617450725 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 634.1040248470882,
            "unit": "ns/iter",
            "extra": "iterations: 1094450\ncpu: 636.1170725025479 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 639.2697562937301,
            "unit": "ns/iter",
            "extra": "iterations: 1092323\ncpu: 641.0227515129066 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 649.3331997209576,
            "unit": "ns/iter",
            "extra": "iterations: 1075187\ncpu: 651.3036253218008 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 875.4853805388439,
            "unit": "ns/iter",
            "extra": "iterations: 798662\ncpu: 877.6876300579125 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 707.2408323054354,
            "unit": "ns/iter",
            "extra": "iterations: 989290\ncpu: 709.2498468617125 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 780.0714496806389,
            "unit": "ns/iter",
            "extra": "iterations: 893818\ncpu: 781.9771944721429 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 936.299498332636,
            "unit": "ns/iter",
            "extra": "iterations: 747560\ncpu: 938.318856009039 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1224.9045822965825,
            "unit": "ns/iter",
            "extra": "iterations: 570198\ncpu: 1227.116652471084 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1806.9391579597802,
            "unit": "ns/iter",
            "extra": "iterations: 387216\ncpu: 1808.5033211570485 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2969.983149990319,
            "unit": "ns/iter",
            "extra": "iterations: 235430\ncpu: 2972.589355660423 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 663.1287733922356,
            "unit": "ns/iter",
            "extra": "iterations: 1046862\ncpu: 669.3083376731616 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3uclid3@nubwork.dev",
            "name": "3uclid3",
            "username": "3uclid3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b1b5a375695428462716b7604b6085ec77e599c",
          "message": "fix(github): rename copilot instructions (#49)\n\nRenames and moves the Copilot instructions out of the nested instructions folder into a top-level GitHub config location.",
          "timestamp": "2025-10-30T13:32:08-04:00",
          "tree_id": "3c3b7c8a86200aa049e762d1e34cfbe6d0533d62",
          "url": "https://github.com/3uclid3/ant/commit/2b1b5a375695428462716b7604b6085ec77e599c"
        },
        "date": 1761845661201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 972.6997988654066,
            "unit": "ns/iter",
            "extra": "iterations: 715437\ncpu: 974.19436512214 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1326.9769112584543,
            "unit": "ns/iter",
            "extra": "iterations: 526447\ncpu: 1327.717380856873 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2049.4030402610892,
            "unit": "ns/iter",
            "extra": "iterations: 341812\ncpu: 2048.9388377240507 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3502.2886473069534,
            "unit": "ns/iter",
            "extra": "iterations: 200428\ncpu: 3501.3785199675176 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6365.880814886185,
            "unit": "ns/iter",
            "extra": "iterations: 109955\ncpu: 6366.8217179765 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12105.33508463029,
            "unit": "ns/iter",
            "extra": "iterations: 57863\ncpu: 12104.546221245713 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23574.448633390766,
            "unit": "ns/iter",
            "extra": "iterations: 29708\ncpu: 23574.085229567536 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46534.79495005681,
            "unit": "ns/iter",
            "extra": "iterations: 15050\ncpu: 46533.70784053745 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92487.31091440677,
            "unit": "ns/iter",
            "extra": "iterations: 7568\ncpu: 92487.03369449919 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184323.78219655188,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 184316.7929944651 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 368256.13925388025,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 368258.9758276218 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.623542898967491,
            "unit": "ns/iter",
            "extra": "iterations: 44933226\ncpu: 15.62168678919248 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.74165227897453,
            "unit": "ns/iter",
            "extra": "iterations: 33774817\ncpu: 20.73987201766334 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.4883785577544,
            "unit": "ns/iter",
            "extra": "iterations: 22659623\ncpu: 30.485637382404892 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.23897475742762,
            "unit": "ns/iter",
            "extra": "iterations: 13892166\ncpu: 50.23604483274961 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 89.9821906240607,
            "unit": "ns/iter",
            "extra": "iterations: 7780340\ncpu: 89.9743349262373 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 175.0964023517077,
            "unit": "ns/iter",
            "extra": "iterations: 4130615\ncpu: 175.07511084911127 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 328.4722803523543,
            "unit": "ns/iter",
            "extra": "iterations: 1958250\ncpu: 328.4473902719269 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 652.3296432449769,
            "unit": "ns/iter",
            "extra": "iterations: 1075584\ncpu: 652.2809218062002 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1288.8041770255884,
            "unit": "ns/iter",
            "extra": "iterations: 532149\ncpu: 1288.7093257715387 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2564.052348295372,
            "unit": "ns/iter",
            "extra": "iterations: 273113\ncpu: 2563.812484209828 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5095.37386423593,
            "unit": "ns/iter",
            "extra": "iterations: 136472\ncpu: 5094.885471012379 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 216.75043021961946,
            "unit": "ns/iter",
            "extra": "iterations: 3230908\ncpu: 216.73154295944127 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 439.22506442132163,
            "unit": "ns/iter",
            "extra": "iterations: 1589536\ncpu: 439.1830043484382 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 865.047707088307,
            "unit": "ns/iter",
            "extra": "iterations: 812395\ncpu: 865.0021947451685 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1667.0070397889895,
            "unit": "ns/iter",
            "extra": "iterations: 420041\ncpu: 1666.9608585828455 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3347.580951221299,
            "unit": "ns/iter",
            "extra": "iterations: 213536\ncpu: 3347.273766484338 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6502.79444820828,
            "unit": "ns/iter",
            "extra": "iterations: 107749\ncpu: 6502.182052733687 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12946.810100375269,
            "unit": "ns/iter",
            "extra": "iterations: 54097\ncpu: 12946.034253285752 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25887.351922155183,
            "unit": "ns/iter",
            "extra": "iterations: 27131\ncpu: 25885.370351258673 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51622.50062772341,
            "unit": "ns/iter",
            "extra": "iterations: 13541\ncpu: 51620.01801934861 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103237.67218293936,
            "unit": "ns/iter",
            "extra": "iterations: 6647\ncpu: 103229.6153151799 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206210.71167452767,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 206198.0309551883 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.339610998801668,
            "unit": "ns/iter",
            "extra": "iterations: 25597042\ncpu: 27.3357575457351 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.23461427026738,
            "unit": "ns/iter",
            "extra": "iterations: 26686872\ncpu: 26.23245556841568 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 32.48205438391318,
            "unit": "ns/iter",
            "extra": "iterations: 20943583\ncpu: 32.478865053796845 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 36.17241659092736,
            "unit": "ns/iter",
            "extra": "iterations: 19251413\ncpu: 36.16887108494338 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 47.66370104474291,
            "unit": "ns/iter",
            "extra": "iterations: 14703043\ncpu: 47.66152435247602 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 68.85844406846363,
            "unit": "ns/iter",
            "extra": "iterations: 10190834\ncpu: 68.85306482276117 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 105.2855191037265,
            "unit": "ns/iter",
            "extra": "iterations: 6657523\ncpu: 105.27828608327759 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 177.41697609332346,
            "unit": "ns/iter",
            "extra": "iterations: 3947893\ncpu: 177.4012547959129 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 332.3573739176879,
            "unit": "ns/iter",
            "extra": "iterations: 2110764\ncpu: 332.3317381763178 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 623.8774887922641,
            "unit": "ns/iter",
            "extra": "iterations: 1124893\ncpu: 623.8216363689694 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1205.534580837041,
            "unit": "ns/iter",
            "extra": "iterations: 575015\ncpu: 1205.4194186238553 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 621.5661155454219,
            "unit": "ns/iter",
            "extra": "iterations: 1122202\ncpu: 623.8440735290958 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 623.6164695889925,
            "unit": "ns/iter",
            "extra": "iterations: 1121121\ncpu: 623.5734314153749 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 623.0694710717921,
            "unit": "ns/iter",
            "extra": "iterations: 1122021\ncpu: 623.6606133058638 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 670.3070704052584,
            "unit": "ns/iter",
            "extra": "iterations: 1031073\ncpu: 674.169825026398 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 670.4556535561264,
            "unit": "ns/iter",
            "extra": "iterations: 1036904\ncpu: 674.5199758168134 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 685.6067202120663,
            "unit": "ns/iter",
            "extra": "iterations: 1038299\ncpu: 691.3987358226542 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 673.7447115102648,
            "unit": "ns/iter",
            "extra": "iterations: 1033141\ncpu: 677.9383482002596 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 676.3512641838207,
            "unit": "ns/iter",
            "extra": "iterations: 1029083\ncpu: 679.4548058799805 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 737.6524884310619,
            "unit": "ns/iter",
            "extra": "iterations: 943465\ncpu: 742.603762725368 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 767.7019108792015,
            "unit": "ns/iter",
            "extra": "iterations: 907071\ncpu: 772.3750698686507 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 797.1163166695351,
            "unit": "ns/iter",
            "extra": "iterations: 872635\ncpu: 802.9555048781984 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 614.844048695993,
            "unit": "ns/iter",
            "extra": "iterations: 1135502\ncpu: 616.658477041428 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 638.7780161464804,
            "unit": "ns/iter",
            "extra": "iterations: 1097760\ncpu: 640.3753789544489 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 644.1735613402067,
            "unit": "ns/iter",
            "extra": "iterations: 1084291\ncpu: 645.3889758393036 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 655.7157612210699,
            "unit": "ns/iter",
            "extra": "iterations: 1067532\ncpu: 657.2875529667339 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 676.8544237470943,
            "unit": "ns/iter",
            "extra": "iterations: 1031329\ncpu: 678.2258096052474 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 712.6488251971439,
            "unit": "ns/iter",
            "extra": "iterations: 975742\ncpu: 714.0941406636196 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 789.8366403887921,
            "unit": "ns/iter",
            "extra": "iterations: 883413\ncpu: 791.8222880979625 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 941.1373535185503,
            "unit": "ns/iter",
            "extra": "iterations: 738525\ncpu: 942.9603060191475 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1226.7677475061787,
            "unit": "ns/iter",
            "extra": "iterations: 569699\ncpu: 1228.9280637814452 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1802.1777484943239,
            "unit": "ns/iter",
            "extra": "iterations: 388234\ncpu: 1803.9269074842562 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2957.1151590302484,
            "unit": "ns/iter",
            "extra": "iterations: 236638\ncpu: 2958.940681543387 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 675.7418719337599,
            "unit": "ns/iter",
            "extra": "iterations: 1028780\ncpu: 680.5814644506046 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ef820f75d4343b12e2247fb260f1e6deeec9ced4",
          "message": "Renames CI workflow to \"Build and Test\" (#50)\n\nReorganizes and consolidates CI workflows to improve clarity and job separation. Renames and refactors workflow jobs, adjusts triggers and path ignores to target main branch for PRs, and standardizes cache keys to avoid collisions across job types.\n\nKey effects:\n- Rename and scope jobs for clarity (build-images, linux-build-test, linux-coverage, linux-sanitizers, nightly benchmark/publish)\n- Move Windows build/test into the nightly pipeline and remove the standalone Windows workflow\n- Enable sanitizer runs with dedicated configuration and cache namespace\n- Update cache key prefixes to prevent cross-job cache conflicts\n- Tighten push/pull_request triggers and paths-ignore to reduce redundant workflow runs\n\nImproves maintainability of CI, reduces duplicated workflows, and prevents cache/key collisions.",
          "timestamp": "2025-10-30T20:57:21Z",
          "url": "https://github.com/3uclid3/ant/commit/ef820f75d4343b12e2247fb260f1e6deeec9ced4"
        },
        "date": 1761858003081,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 982.0537303575347,
            "unit": "ns/iter",
            "extra": "iterations: 710697\ncpu: 983.5849103064432 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1329.9472139544441,
            "unit": "ns/iter",
            "extra": "iterations: 524741\ncpu: 1331.4459457141875 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2056.1978482846635,
            "unit": "ns/iter",
            "extra": "iterations: 339917\ncpu: 2057.94804025688 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3497.3589274031833,
            "unit": "ns/iter",
            "extra": "iterations: 199773\ncpu: 3499.4212631336623 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6368.90232948289,
            "unit": "ns/iter",
            "extra": "iterations: 109511\ncpu: 6369.55394435186 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12137.629484007824,
            "unit": "ns/iter",
            "extra": "iterations: 57733\ncpu: 12139.718462579081 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23612.88401445266,
            "unit": "ns/iter",
            "extra": "iterations: 29633\ncpu: 23613.91465595577 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46594.09150277086,
            "unit": "ns/iter",
            "extra": "iterations: 15005\ncpu: 46596.93255580642 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92574.15335726079,
            "unit": "ns/iter",
            "extra": "iterations: 7551\ncpu: 92576.08674348326 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184405.717408312,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 184405.74795890675 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 368156.2083113545,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 368170.3108889899 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.764929808819428,
            "unit": "ns/iter",
            "extra": "iterations: 44340186\ncpu: 15.764540207386595 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.935031613813827,
            "unit": "ns/iter",
            "extra": "iterations: 33512407\ncpu: 20.933840353514455 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.583236523764594,
            "unit": "ns/iter",
            "extra": "iterations: 22718140\ncpu: 30.582745594489694 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.67014914602097,
            "unit": "ns/iter",
            "extra": "iterations: 13884648\ncpu: 50.667483468072085 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 90.38248816460847,
            "unit": "ns/iter",
            "extra": "iterations: 7747526\ncpu: 90.37981389155688 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 170.06909073732274,
            "unit": "ns/iter",
            "extra": "iterations: 4128180\ncpu: 170.05691563836825 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 329.16821297412054,
            "unit": "ns/iter",
            "extra": "iterations: 2125817\ncpu: 329.1517543607937 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 651.5751135377137,
            "unit": "ns/iter",
            "extra": "iterations: 1074753\ncpu: 651.5179180704773 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1289.3454649204275,
            "unit": "ns/iter",
            "extra": "iterations: 543265\ncpu: 1289.2925938538278 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2563.969398991099,
            "unit": "ns/iter",
            "extra": "iterations: 273357\ncpu: 2563.809150671095 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5101.940372607634,
            "unit": "ns/iter",
            "extra": "iterations: 137571\ncpu: 5101.608834710808 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 216.88153147781313,
            "unit": "ns/iter",
            "extra": "iterations: 3228385\ncpu: 216.8774114611487 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 438.6902383167764,
            "unit": "ns/iter",
            "extra": "iterations: 1595985\ncpu: 438.6513006074614 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 860.3102015209231,
            "unit": "ns/iter",
            "extra": "iterations: 814506\ncpu: 860.2880040171598 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1675.640592878756,
            "unit": "ns/iter",
            "extra": "iterations: 419310\ncpu: 1675.5331115403872 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3285.7137738121114,
            "unit": "ns/iter",
            "extra": "iterations: 211815\ncpu: 3285.581752944791 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6508.8478960201355,
            "unit": "ns/iter",
            "extra": "iterations: 107867\ncpu: 6508.191643412704 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12954.189720024448,
            "unit": "ns/iter",
            "extra": "iterations: 53969\ncpu: 12953.281494932293 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25854.84382396426,
            "unit": "ns/iter",
            "extra": "iterations: 27040\ncpu: 25852.16190828406 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51610.037026110214,
            "unit": "ns/iter",
            "extra": "iterations: 13558\ncpu: 51605.674952057896 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103403.16791869313,
            "unit": "ns/iter",
            "extra": "iterations: 6789\ncpu: 103394.22065105289 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 207112.19970544623,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 207091.2374079526 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.350449987018354,
            "unit": "ns/iter",
            "extra": "iterations: 25551626\ncpu: 27.34983938008486 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.22673851178345,
            "unit": "ns/iter",
            "extra": "iterations: 26691306\ncpu: 26.225159420824074 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 29.493783988827456,
            "unit": "ns/iter",
            "extra": "iterations: 23828786\ncpu: 29.49176626119336 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 35.063319435688975,
            "unit": "ns/iter",
            "extra": "iterations: 19983722\ncpu: 35.060357224745374 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 46.539734826079915,
            "unit": "ns/iter",
            "extra": "iterations: 15038055\ncpu: 46.536059749748304 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 67.86121836017936,
            "unit": "ns/iter",
            "extra": "iterations: 10325912\ncpu: 67.85507914458363 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 105.1438421307177,
            "unit": "ns/iter",
            "extra": "iterations: 6682896\ncpu: 105.14149299944253 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 177.1531338730395,
            "unit": "ns/iter",
            "extra": "iterations: 3952633\ncpu: 177.14122965628357 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 332.53375931822654,
            "unit": "ns/iter",
            "extra": "iterations: 2105552\ncpu: 332.51423094751294 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 624.7397186286784,
            "unit": "ns/iter",
            "extra": "iterations: 1123853\ncpu: 624.6578645071924 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1204.4859045734247,
            "unit": "ns/iter",
            "extra": "iterations: 581075\ncpu: 1204.3850484016748 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 622.7873330174863,
            "unit": "ns/iter",
            "extra": "iterations: 1121072\ncpu: 624.6404655520705 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 623.6738795164649,
            "unit": "ns/iter",
            "extra": "iterations: 1118651\ncpu: 627.0408706557089 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 624.0828910034235,
            "unit": "ns/iter",
            "extra": "iterations: 1116828\ncpu: 627.3653893048985 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 670.3872245888092,
            "unit": "ns/iter",
            "extra": "iterations: 1039779\ncpu: 673.4739507090115 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 664.431549676658,
            "unit": "ns/iter",
            "extra": "iterations: 1038337\ncpu: 666.7584194751265 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 664.1572377627826,
            "unit": "ns/iter",
            "extra": "iterations: 1054683\ncpu: 666.8304115976571 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 675.2601867540058,
            "unit": "ns/iter",
            "extra": "iterations: 1030848\ncpu: 678.8283752769726 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 677.6797586587919,
            "unit": "ns/iter",
            "extra": "iterations: 1029764\ncpu: 680.9141531446679 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 764.614610870337,
            "unit": "ns/iter",
            "extra": "iterations: 906790\ncpu: 772.2992247351291 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 773.1038131467777,
            "unit": "ns/iter",
            "extra": "iterations: 904057\ncpu: 776.1877580773872 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 803.0889285380646,
            "unit": "ns/iter",
            "extra": "iterations: 861197\ncpu: 811.6404295454116 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 615.8511199021384,
            "unit": "ns/iter",
            "extra": "iterations: 1134564\ncpu: 617.440733181612 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 633.9345731454245,
            "unit": "ns/iter",
            "extra": "iterations: 1098983\ncpu: 636.0058417630705 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 639.5049234866303,
            "unit": "ns/iter",
            "extra": "iterations: 1091910\ncpu: 641.7722321434501 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 651.3252990073619,
            "unit": "ns/iter",
            "extra": "iterations: 1072773\ncpu: 653.1766972133942 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 671.6852539313136,
            "unit": "ns/iter",
            "extra": "iterations: 1040353\ncpu: 673.5343417187353 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 710.57933626352,
            "unit": "ns/iter",
            "extra": "iterations: 985350\ncpu: 712.8475374178454 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 782.5569620302796,
            "unit": "ns/iter",
            "extra": "iterations: 890488\ncpu: 784.6647209152931 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 939.1367067441747,
            "unit": "ns/iter",
            "extra": "iterations: 743277\ncpu: 941.1988693344534 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1229.9500364390674,
            "unit": "ns/iter",
            "extra": "iterations: 567794\ncpu: 1232.068521324647 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1811.2785872472903,
            "unit": "ns/iter",
            "extra": "iterations: 386116\ncpu: 1813.0756896997611 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2972.838823447591,
            "unit": "ns/iter",
            "extra": "iterations: 235090\ncpu: 2974.211493473143 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 664.0342510297279,
            "unit": "ns/iter",
            "extra": "iterations: 1035998\ncpu: 675.7475014405095 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "024f54621fbca115dfd1fabe437e92a471f33bbf",
          "message": "refactor(allocator): standardize allocator rebinding (#52)\n\nReplaces custom rebind utilities with a unified rebind approach and container aliases. Introduces a small container header providing allocator-aware aliases (vector, unordered_map) and a rebind_allocator wrapper that leverages std::allocator_traits::rebind_alloc, and updates database code to use the standardized rebinding or direct allocator_traits rebind_alloc types.\n\nWhy: ensures consistent allocator rebinding across the codebase, reduces custom allocator boilerplate, and simplifies container/type aliases to make allocations safer and clearer.\n\nNotes:\n- Removes the legacy custom allocator header and migrates callers to the new container utilities or std::allocator_traits-based rebinding.\n- Simplifies several database classes by using allocator-aware container aliases and removing redundant allocator members/initializers.\n\nBREAKING CHANGE: removes the legacy allocator header (include/ant/core/allocator.hpp). Update includes to use the new container utilities or std::allocator_traits rebind APIs.",
          "timestamp": "2025-10-30T23:25:32Z",
          "url": "https://github.com/3uclid3/ant/commit/024f54621fbca115dfd1fabe437e92a471f33bbf"
        },
        "date": 1761881046897,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 969.9593348230517,
            "unit": "ns/iter",
            "extra": "iterations: 715477\ncpu: 971.6024316644575 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1316.6565431017443,
            "unit": "ns/iter",
            "extra": "iterations: 530643\ncpu: 1317.6760533917306 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2042.324013570793,
            "unit": "ns/iter",
            "extra": "iterations: 342677\ncpu: 2043.7020897222194 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3496.7522865589617,
            "unit": "ns/iter",
            "extra": "iterations: 200191\ncpu: 3498.872381875046 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6366.167863718468,
            "unit": "ns/iter",
            "extra": "iterations: 109994\ncpu: 6367.217266395273 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12118.225200798777,
            "unit": "ns/iter",
            "extra": "iterations: 57784\ncpu: 12119.181261249052 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23575.272889542255,
            "unit": "ns/iter",
            "extra": "iterations: 29697\ncpu: 23577.613462637208 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46583.629853781465,
            "unit": "ns/iter",
            "extra": "iterations: 15040\ncpu: 46589.107313833665 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92513.48235298764,
            "unit": "ns/iter",
            "extra": "iterations: 7565\ncpu: 92522.17224057834 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184308.4764534347,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184307.3493817365 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 368188.07366205036,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 368185.25543188467 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.597382489420083,
            "unit": "ns/iter",
            "extra": "iterations: 44829389\ncpu: 15.596939119558375 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.725592830558067,
            "unit": "ns/iter",
            "extra": "iterations: 33708620\ncpu: 20.72504635312864 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.541713106117527,
            "unit": "ns/iter",
            "extra": "iterations: 23021913\ncpu: 30.539664927063207 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.19440031952187,
            "unit": "ns/iter",
            "extra": "iterations: 13938331\ncpu: 50.19022055079613 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 90.00971412786498,
            "unit": "ns/iter",
            "extra": "iterations: 7775994\ncpu: 90.00012667190838 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 170.7618303978171,
            "unit": "ns/iter",
            "extra": "iterations: 4110407\ncpu: 170.75258727420444 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 330.0879281034421,
            "unit": "ns/iter",
            "extra": "iterations: 2131173\ncpu: 330.05890934241353 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 650.4688603349259,
            "unit": "ns/iter",
            "extra": "iterations: 1075702\ncpu: 650.4206276459457 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1289.360549984644,
            "unit": "ns/iter",
            "extra": "iterations: 543797\ncpu: 1289.300271976494 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2563.914006669874,
            "unit": "ns/iter",
            "extra": "iterations: 272870\ncpu: 2563.83564701139 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5109.697882218989,
            "unit": "ns/iter",
            "extra": "iterations: 136983\ncpu: 5109.206536577521 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 218.7873716903195,
            "unit": "ns/iter",
            "extra": "iterations: 3226861\ncpu: 218.75514780463033 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 440.34064082633864,
            "unit": "ns/iter",
            "extra": "iterations: 1596626\ncpu: 440.319707307785 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 860.9565821657523,
            "unit": "ns/iter",
            "extra": "iterations: 815218\ncpu: 860.8939989058135 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1666.5640241657072,
            "unit": "ns/iter",
            "extra": "iterations: 420927\ncpu: 1666.478173174921 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3294.1325606771047,
            "unit": "ns/iter",
            "extra": "iterations: 203454\ncpu: 3290.500693031348 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6495.762689060027,
            "unit": "ns/iter",
            "extra": "iterations: 107770\ncpu: 6495.502561009552 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12935.395839102277,
            "unit": "ns/iter",
            "extra": "iterations: 54171\ncpu: 12934.27959609381 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25805.822175501,
            "unit": "ns/iter",
            "extra": "iterations: 27111\ncpu: 25805.02766404787 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51574.49300544803,
            "unit": "ns/iter",
            "extra": "iterations: 13582\ncpu: 51571.30746576351 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103081.28485116348,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 103073.55865016191 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206111.34325280212,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 206099.08632881567 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.36582581051667,
            "unit": "ns/iter",
            "extra": "iterations: 25559465\ncpu: 27.36413246521387 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.338986530648175,
            "unit": "ns/iter",
            "extra": "iterations: 26681833\ncpu: 26.33767380224581 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 29.275223388968968,
            "unit": "ns/iter",
            "extra": "iterations: 23890168\ncpu: 29.272744000795775 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 34.95513257034347,
            "unit": "ns/iter",
            "extra": "iterations: 20044830\ncpu: 34.95359282169029 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 46.468224483885734,
            "unit": "ns/iter",
            "extra": "iterations: 15063941\ncpu: 46.467362558044705 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 67.85745804702329,
            "unit": "ns/iter",
            "extra": "iterations: 10313511\ncpu: 67.85579498582015 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 104.6160028565323,
            "unit": "ns/iter",
            "extra": "iterations: 6693430\ncpu: 104.60485431236293 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 177.11913520739537,
            "unit": "ns/iter",
            "extra": "iterations: 3940783\ncpu: 177.11197622401474 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 334.45142344574185,
            "unit": "ns/iter",
            "extra": "iterations: 2107035\ncpu: 334.4210333478109 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 622.5509219562707,
            "unit": "ns/iter",
            "extra": "iterations: 1123101\ncpu: 622.5216298445124 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1204.110389521019,
            "unit": "ns/iter",
            "extra": "iterations: 581278\ncpu: 1204.0107022801492 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 622.3628825936556,
            "unit": "ns/iter",
            "extra": "iterations: 1124529\ncpu: 623.4972535188307 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 627.419734790148,
            "unit": "ns/iter",
            "extra": "iterations: 1118056\ncpu: 628.2167852043882 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 625.1671169474629,
            "unit": "ns/iter",
            "extra": "iterations: 1117822\ncpu: 626.2586851921976 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 661.9867217592151,
            "unit": "ns/iter",
            "extra": "iterations: 1043512\ncpu: 663.565904370698 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 662.5147763172087,
            "unit": "ns/iter",
            "extra": "iterations: 1057436\ncpu: 663.9300960068899 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 663.9917701438285,
            "unit": "ns/iter",
            "extra": "iterations: 1056154\ncpu: 665.0068436987766 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 665.4913437862024,
            "unit": "ns/iter",
            "extra": "iterations: 1049650\ncpu: 666.6056180610697 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 666.8347805244225,
            "unit": "ns/iter",
            "extra": "iterations: 1050536\ncpu: 668.0374761076966 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 736.188594311336,
            "unit": "ns/iter",
            "extra": "iterations: 953804\ncpu: 739.505248455256 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 760.7840722339498,
            "unit": "ns/iter",
            "extra": "iterations: 917844\ncpu: 761.7270963237777 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 790.8213132685573,
            "unit": "ns/iter",
            "extra": "iterations: 884576\ncpu: 791.669937911338 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 615.1304626847509,
            "unit": "ns/iter",
            "extra": "iterations: 1137329\ncpu: 616.9609251152299 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 633.5351813069598,
            "unit": "ns/iter",
            "extra": "iterations: 1100343\ncpu: 635.4613988575144 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 639.608546378617,
            "unit": "ns/iter",
            "extra": "iterations: 1092160\ncpu: 641.6076582162192 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 650.2115919425028,
            "unit": "ns/iter",
            "extra": "iterations: 1065603\ncpu: 652.3070299160435 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 670.9655450310239,
            "unit": "ns/iter",
            "extra": "iterations: 1038515\ncpu: 672.8679999855057 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 711.4427484404135,
            "unit": "ns/iter",
            "extra": "iterations: 983423\ncpu: 713.6422831264259 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 783.4382095929816,
            "unit": "ns/iter",
            "extra": "iterations: 888714\ncpu: 785.5863843683111 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 939.0318782837413,
            "unit": "ns/iter",
            "extra": "iterations: 743704\ncpu: 940.7591004011891 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1230.0853151438878,
            "unit": "ns/iter",
            "extra": "iterations: 565773\ncpu: 1232.139543590405 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1811.2866581036697,
            "unit": "ns/iter",
            "extra": "iterations: 386279\ncpu: 1813.1312393518756 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2975.8967256794876,
            "unit": "ns/iter",
            "extra": "iterations: 235073\ncpu: 2978.0050452412684 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 663.5532484617842,
            "unit": "ns/iter",
            "extra": "iterations: 1041138\ncpu: 671.2862694398701 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "024f54621fbca115dfd1fabe437e92a471f33bbf",
          "message": "refactor(allocator): standardize allocator rebinding (#52)\n\nReplaces custom rebind utilities with a unified rebind approach and container aliases. Introduces a small container header providing allocator-aware aliases (vector, unordered_map) and a rebind_allocator wrapper that leverages std::allocator_traits::rebind_alloc, and updates database code to use the standardized rebinding or direct allocator_traits rebind_alloc types.\n\nWhy: ensures consistent allocator rebinding across the codebase, reduces custom allocator boilerplate, and simplifies container/type aliases to make allocations safer and clearer.\n\nNotes:\n- Removes the legacy custom allocator header and migrates callers to the new container utilities or std::allocator_traits-based rebinding.\n- Simplifies several database classes by using allocator-aware container aliases and removing redundant allocator members/initializers.\n\nBREAKING CHANGE: removes the legacy allocator header (include/ant/core/allocator.hpp). Update includes to use the new container utilities or std::allocator_traits rebind APIs.",
          "timestamp": "2025-10-30T23:25:32Z",
          "url": "https://github.com/3uclid3/ant/commit/024f54621fbca115dfd1fabe437e92a471f33bbf"
        },
        "date": 1761967443722,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1024.124083032067,
            "unit": "ns/iter",
            "extra": "iterations: 670688\ncpu: 1025.4686158093991 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1346.4663871072244,
            "unit": "ns/iter",
            "extra": "iterations: 516751\ncpu: 1347.931347980018 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2056.8252365424955,
            "unit": "ns/iter",
            "extra": "iterations: 339682\ncpu: 2057.9173727195794 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3624.155308668864,
            "unit": "ns/iter",
            "extra": "iterations: 199654\ncpu: 3625.1341621014044 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6376.353062650952,
            "unit": "ns/iter",
            "extra": "iterations: 109904\ncpu: 6377.717662687881 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12204.655410322697,
            "unit": "ns/iter",
            "extra": "iterations: 57834\ncpu: 12205.594529170252 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23591.956048343975,
            "unit": "ns/iter",
            "extra": "iterations: 29669\ncpu: 23589.086993157773 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46562.831791334254,
            "unit": "ns/iter",
            "extra": "iterations: 14916\ncpu: 46561.91760524858 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92701.15909693492,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 92701.61645101302 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184608.8595105462,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184605.5832675705 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 367959.9453206702,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 367941.3002103098 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.598133345367026,
            "unit": "ns/iter",
            "extra": "iterations: 44940504\ncpu: 15.597119493808965 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.73471596083119,
            "unit": "ns/iter",
            "extra": "iterations: 33817255\ncpu: 20.732942457925724 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.447905142658822,
            "unit": "ns/iter",
            "extra": "iterations: 23063265\ncpu: 30.44468859894732 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.26456167809455,
            "unit": "ns/iter",
            "extra": "iterations: 13849228\ncpu: 50.261644475778695 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 90.65706864829612,
            "unit": "ns/iter",
            "extra": "iterations: 7771118\ncpu: 90.65408233409904 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 171.004471001582,
            "unit": "ns/iter",
            "extra": "iterations: 4136657\ncpu: 170.98351809202447 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 328.26295286180095,
            "unit": "ns/iter",
            "extra": "iterations: 2127001\ncpu: 328.2480069355861 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 653.8443084041086,
            "unit": "ns/iter",
            "extra": "iterations: 1069454\ncpu: 653.8105191995185 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1297.3287720627843,
            "unit": "ns/iter",
            "extra": "iterations: 543562\ncpu: 1297.247649762122 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2560.1864789164983,
            "unit": "ns/iter",
            "extra": "iterations: 273484\ncpu: 2560.036726097323 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5105.223781323841,
            "unit": "ns/iter",
            "extra": "iterations: 137116\ncpu: 5104.829888561512 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 217.13815625180342,
            "unit": "ns/iter",
            "extra": "iterations: 3227534\ncpu: 217.1334972768684 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 441.42351619159837,
            "unit": "ns/iter",
            "extra": "iterations: 1354437\ncpu: 441.38513936048554 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 865.268266819908,
            "unit": "ns/iter",
            "extra": "iterations: 786508\ncpu: 865.1899039806352 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1671.9600924701142,
            "unit": "ns/iter",
            "extra": "iterations: 419595\ncpu: 1671.8194306414498 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3284.31905719363,
            "unit": "ns/iter",
            "extra": "iterations: 213363\ncpu: 3284.017866265483 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6505.306217472159,
            "unit": "ns/iter",
            "extra": "iterations: 107600\ncpu: 6504.960009293668 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12959.050974873604,
            "unit": "ns/iter",
            "extra": "iterations: 54007\ncpu: 12958.480530301636 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25848.711331068007,
            "unit": "ns/iter",
            "extra": "iterations: 27076\ncpu: 25847.722226325972 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51623.510175490075,
            "unit": "ns/iter",
            "extra": "iterations: 13562\ncpu: 51619.26817578533 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103305.10274174392,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 103299.24837853794 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206246.57531010298,
            "unit": "ns/iter",
            "extra": "iterations: 3386\ncpu: 206237.68310691 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.334331922445923,
            "unit": "ns/iter",
            "extra": "iterations: 25562399\ncpu: 27.331920881134906 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.203528012721655,
            "unit": "ns/iter",
            "extra": "iterations: 26661922\ncpu: 26.201930453475924 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 29.25677405363782,
            "unit": "ns/iter",
            "extra": "iterations: 23913857\ncpu: 29.255172555393525 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 34.95532789002014,
            "unit": "ns/iter",
            "extra": "iterations: 20038655\ncpu: 34.95375597813345 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 46.456392670962046,
            "unit": "ns/iter",
            "extra": "iterations: 15051197\ncpu: 46.453444666228044 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 67.80614802314851,
            "unit": "ns/iter",
            "extra": "iterations: 10312941\ncpu: 67.80359065372296 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 104.65408928358802,
            "unit": "ns/iter",
            "extra": "iterations: 6690793\ncpu: 104.64534786833217 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 177.426882496782,
            "unit": "ns/iter",
            "extra": "iterations: 3945943\ncpu: 177.41869003176174 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 332.13965783994973,
            "unit": "ns/iter",
            "extra": "iterations: 2109656\ncpu: 332.1143731489888 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 622.9276913700751,
            "unit": "ns/iter",
            "extra": "iterations: 1122328\ncpu: 622.8895180375059 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1209.2133648002543,
            "unit": "ns/iter",
            "extra": "iterations: 578385\ncpu: 1209.1218738383552 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 629.3880404340327,
            "unit": "ns/iter",
            "extra": "iterations: 1101545\ncpu: 636.6697048244743 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 628.6659453780755,
            "unit": "ns/iter",
            "extra": "iterations: 1103580\ncpu: 636.1502700267796 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 627.5972459419544,
            "unit": "ns/iter",
            "extra": "iterations: 1104699\ncpu: 635.2619926323854 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 673.2682843188447,
            "unit": "ns/iter",
            "extra": "iterations: 1034794\ncpu: 675.4435549511097 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 675.2449538038161,
            "unit": "ns/iter",
            "extra": "iterations: 1034142\ncpu: 677.360332529837 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 675.2934655837329,
            "unit": "ns/iter",
            "extra": "iterations: 1034111\ncpu: 677.6032611616516 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 677.8501444150509,
            "unit": "ns/iter",
            "extra": "iterations: 1031413\ncpu: 680.3148961624369 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 679.8444391534853,
            "unit": "ns/iter",
            "extra": "iterations: 1024101\ncpu: 681.9792774350514 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 746.5577716765744,
            "unit": "ns/iter",
            "extra": "iterations: 934117\ncpu: 749.6454887351163 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 779.867530801859,
            "unit": "ns/iter",
            "extra": "iterations: 897537\ncpu: 781.9437493919535 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 804.5379779550558,
            "unit": "ns/iter",
            "extra": "iterations: 842923\ncpu: 806.9551821438048 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 619.6686399024815,
            "unit": "ns/iter",
            "extra": "iterations: 1126071\ncpu: 621.1294421069555 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 656.254247679763,
            "unit": "ns/iter",
            "extra": "iterations: 1082236\ncpu: 663.2273857130483 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 643.1663797399879,
            "unit": "ns/iter",
            "extra": "iterations: 1075179\ncpu: 650.8804794389164 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 657.5787747217549,
            "unit": "ns/iter",
            "extra": "iterations: 1055732\ncpu: 665.8409198562897 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 676.8700477248011,
            "unit": "ns/iter",
            "extra": "iterations: 1026577\ncpu: 684.7724330455352 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 715.5514992912383,
            "unit": "ns/iter",
            "extra": "iterations: 970926\ncpu: 723.3843495719736 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 787.1108932211619,
            "unit": "ns/iter",
            "extra": "iterations: 879188\ncpu: 794.8845366409857 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 940.8404263447738,
            "unit": "ns/iter",
            "extra": "iterations: 737509\ncpu: 948.4955695392455 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1231.3819439188221,
            "unit": "ns/iter",
            "extra": "iterations: 565083\ncpu: 1238.6842499216787 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1812.8715202337096,
            "unit": "ns/iter",
            "extra": "iterations: 384364\ncpu: 1820.3323802478294 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2975.6149208002853,
            "unit": "ns/iter",
            "extra": "iterations: 234344\ncpu: 2982.567972731803 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 673.4526901700095,
            "unit": "ns/iter",
            "extra": "iterations: 1035673\ncpu: 674.2593096459284 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "024f54621fbca115dfd1fabe437e92a471f33bbf",
          "message": "refactor(allocator): standardize allocator rebinding (#52)\n\nReplaces custom rebind utilities with a unified rebind approach and container aliases. Introduces a small container header providing allocator-aware aliases (vector, unordered_map) and a rebind_allocator wrapper that leverages std::allocator_traits::rebind_alloc, and updates database code to use the standardized rebinding or direct allocator_traits rebind_alloc types.\n\nWhy: ensures consistent allocator rebinding across the codebase, reduces custom allocator boilerplate, and simplifies container/type aliases to make allocations safer and clearer.\n\nNotes:\n- Removes the legacy custom allocator header and migrates callers to the new container utilities or std::allocator_traits-based rebinding.\n- Simplifies several database classes by using allocator-aware container aliases and removing redundant allocator members/initializers.\n\nBREAKING CHANGE: removes the legacy allocator header (include/ant/core/allocator.hpp). Update includes to use the new container utilities or std::allocator_traits rebind APIs.",
          "timestamp": "2025-10-30T23:25:32Z",
          "url": "https://github.com/3uclid3/ant/commit/024f54621fbca115dfd1fabe437e92a471f33bbf"
        },
        "date": 1762053966349,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 981.316404932828,
            "unit": "ns/iter",
            "extra": "iterations: 712786\ncpu: 982.4130033417099 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1321.0074588644995,
            "unit": "ns/iter",
            "extra": "iterations: 523672\ncpu: 1322.2673791991413 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2047.2907997311058,
            "unit": "ns/iter",
            "extra": "iterations: 341675\ncpu: 2048.302126289788 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3543.118252653131,
            "unit": "ns/iter",
            "extra": "iterations: 199818\ncpu: 3545.314856520212 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 6381.306700322763,
            "unit": "ns/iter",
            "extra": "iterations: 109576\ncpu: 6381.6767084051335 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 12130.233090388068,
            "unit": "ns/iter",
            "extra": "iterations: 57763\ncpu: 12131.670221421744 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 23605.971458409218,
            "unit": "ns/iter",
            "extra": "iterations: 29606\ncpu: 23606.603830302993 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 46579.54352603142,
            "unit": "ns/iter",
            "extra": "iterations: 15037\ncpu: 46574.97067234005 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 92632.85356811625,
            "unit": "ns/iter",
            "extra": "iterations: 7553\ncpu: 92636.38924930133 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 184444.19100247772,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184436.04972376663 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 367981.5021052048,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 367986.9189473721 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 15.604538422334782,
            "unit": "ns/iter",
            "extra": "iterations: 44970341\ncpu: 15.602457117236476 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 20.74420752721689,
            "unit": "ns/iter",
            "extra": "iterations: 33827004\ncpu: 20.74363564683409 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 30.398165660219544,
            "unit": "ns/iter",
            "extra": "iterations: 22951364\ncpu: 30.396510638757693 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 50.29717182174198,
            "unit": "ns/iter",
            "extra": "iterations: 13542640\ncpu: 50.29184390931161 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 93.46284059748672,
            "unit": "ns/iter",
            "extra": "iterations: 7546004\ncpu: 93.45771218780162 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 171.62481934205496,
            "unit": "ns/iter",
            "extra": "iterations: 4118280\ncpu: 171.60889788940963 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 328.15454071904475,
            "unit": "ns/iter",
            "extra": "iterations: 2132823\ncpu: 328.12978526581844 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 656.1993874317689,
            "unit": "ns/iter",
            "extra": "iterations: 1076778\ncpu: 655.0121779976906 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1288.9363858752313,
            "unit": "ns/iter",
            "extra": "iterations: 544093\ncpu: 1288.841653908431 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2555.0275662654553,
            "unit": "ns/iter",
            "extra": "iterations: 273559\ncpu: 2554.748262714805 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5162.255152589416,
            "unit": "ns/iter",
            "extra": "iterations: 137067\ncpu: 5162.064304318309 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 216.52104492403518,
            "unit": "ns/iter",
            "extra": "iterations: 3231967\ncpu: 216.51011226290353 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 438.8032526270893,
            "unit": "ns/iter",
            "extra": "iterations: 1597109\ncpu: 438.78159599626554 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 858.4661704833761,
            "unit": "ns/iter",
            "extra": "iterations: 820127\ncpu: 858.4251304980801 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1679.4949715162957,
            "unit": "ns/iter",
            "extra": "iterations: 421996\ncpu: 1679.355202418978 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3271.806026409407,
            "unit": "ns/iter",
            "extra": "iterations: 213560\ncpu: 3271.5660563775905 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6494.073425308423,
            "unit": "ns/iter",
            "extra": "iterations: 107783\ncpu: 6493.4226547785975 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12934.401587477634,
            "unit": "ns/iter",
            "extra": "iterations: 54048\ncpu: 12933.588421403196 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25831.71456504102,
            "unit": "ns/iter",
            "extra": "iterations: 27106\ncpu: 25828.91809931383 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 51608.47617291366,
            "unit": "ns/iter",
            "extra": "iterations: 13556\ncpu: 51603.75472115651 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 103326.53229365761,
            "unit": "ns/iter",
            "extra": "iterations: 6797\ncpu: 103318.8943651613 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 206696.24918998222,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 206686.35817378497 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.36425213401505,
            "unit": "ns/iter",
            "extra": "iterations: 25603257\ncpu: 27.362689637494068 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.18431593286022,
            "unit": "ns/iter",
            "extra": "iterations: 26648700\ncpu: 26.183178841744855 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 29.23417899721239,
            "unit": "ns/iter",
            "extra": "iterations: 23952306\ncpu: 29.232289993289083 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 35.97748645665457,
            "unit": "ns/iter",
            "extra": "iterations: 18134551\ncpu: 35.9736951855051 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 48.56895356862232,
            "unit": "ns/iter",
            "extra": "iterations: 14659031\ncpu: 48.563971656789555 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 68.78331561743693,
            "unit": "ns/iter",
            "extra": "iterations: 10171656\ncpu: 68.77913065483196 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 105.55109547601998,
            "unit": "ns/iter",
            "extra": "iterations: 6669612\ncpu: 105.54155564071877 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 177.45842561412843,
            "unit": "ns/iter",
            "extra": "iterations: 3940419\ncpu: 177.4445045057382 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 334.47831222499866,
            "unit": "ns/iter",
            "extra": "iterations: 2091985\ncpu: 334.46403105184805 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 625.4098162378612,
            "unit": "ns/iter",
            "extra": "iterations: 1120307\ncpu: 625.3412734188029 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1207.1950022265185,
            "unit": "ns/iter",
            "extra": "iterations: 579378\ncpu: 1207.122916299901 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 622.9667751352008,
            "unit": "ns/iter",
            "extra": "iterations: 1119854\ncpu: 625.3957158701622 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 624.4929963334233,
            "unit": "ns/iter",
            "extra": "iterations: 1116201\ncpu: 626.880495535704 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 624.5170594472809,
            "unit": "ns/iter",
            "extra": "iterations: 1114133\ncpu: 627.1264310446983 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 670.5054544746816,
            "unit": "ns/iter",
            "extra": "iterations: 1039239\ncpu: 673.6006010172505 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 670.7850673201849,
            "unit": "ns/iter",
            "extra": "iterations: 1038097\ncpu: 673.7401572271098 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 672.2936093393319,
            "unit": "ns/iter",
            "extra": "iterations: 1037215\ncpu: 675.2909329337936 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 676.7074167479359,
            "unit": "ns/iter",
            "extra": "iterations: 1030951\ncpu: 678.7576179683866 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 677.5935354613569,
            "unit": "ns/iter",
            "extra": "iterations: 1029278\ncpu: 680.2123381623912 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 745.2933282287366,
            "unit": "ns/iter",
            "extra": "iterations: 930906\ncpu: 750.8039512047673 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 767.8371654995727,
            "unit": "ns/iter",
            "extra": "iterations: 908665\ncpu: 770.4906560695721 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 799.6671804301635,
            "unit": "ns/iter",
            "extra": "iterations: 866782\ncpu: 806.0513704720421 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 615.5584065616935,
            "unit": "ns/iter",
            "extra": "iterations: 1133289\ncpu: 617.1692710285863 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 636.7902958139463,
            "unit": "ns/iter",
            "extra": "iterations: 1102987\ncpu: 638.6640894219721 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 637.1403638415355,
            "unit": "ns/iter",
            "extra": "iterations: 1095054\ncpu: 639.3816140598884 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 648.1233249421819,
            "unit": "ns/iter",
            "extra": "iterations: 1078314\ncpu: 650.139166328151 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 669.0037624338521,
            "unit": "ns/iter",
            "extra": "iterations: 1045337\ncpu: 671.3044903167023 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 705.8725400293287,
            "unit": "ns/iter",
            "extra": "iterations: 986655\ncpu: 707.8605926123677 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 778.7069709651447,
            "unit": "ns/iter",
            "extra": "iterations: 895628\ncpu: 780.5810950559544 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 933.556712599779,
            "unit": "ns/iter",
            "extra": "iterations: 750962\ncpu: 935.7838226120888 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1224.1582945959758,
            "unit": "ns/iter",
            "extra": "iterations: 570506\ncpu: 1226.3116426616862 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1805.2165545068772,
            "unit": "ns/iter",
            "extra": "iterations: 386928\ncpu: 1807.2168051924782 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 3090.1438918876247,
            "unit": "ns/iter",
            "extra": "iterations: 226135\ncpu: 3093.4709620267704 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 666.4999942314332,
            "unit": "ns/iter",
            "extra": "iterations: 1039766\ncpu: 672.5847719712252 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff8d3b0cd01bc058be753aa42ac0b1563fec0061",
          "message": "docs: add API stories and refresh UML diagrams (#65)\n\nAdds comprehensive documentation for query, changeset, system APIs and access semantics to clarify intended usage, type qualifiers, and examples for consumers and contributors.\n\nReplaces and expands the database UML diagram with a more detailed, namespaced model and removes outdated draft diagrams to keep architecture docs consistent and up to date.\n\nImproves discoverability of how to declare signatures, use typed queries/changesets in systems, and explains access semantics for required/optional/read/write component access.",
          "timestamp": "2025-11-03T00:41:18Z",
          "url": "https://github.com/3uclid3/ant/commit/ff8d3b0cd01bc058be753aa42ac0b1563fec0061"
        },
        "date": 1762140504541,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1165.298862797736,
            "unit": "ns/iter",
            "extra": "iterations: 601828\ncpu: 1167.497165302887 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1698.977397511866,
            "unit": "ns/iter",
            "extra": "iterations: 408716\ncpu: 1701.6335548400227 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2773.426497756207,
            "unit": "ns/iter",
            "extra": "iterations: 252210\ncpu: 2774.926692042425 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 5084.239210531412,
            "unit": "ns/iter",
            "extra": "iterations: 137611\ncpu: 5087.049836131985 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9551.399364542665,
            "unit": "ns/iter",
            "extra": "iterations: 73334\ncpu: 9551.9973136594 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 18491.569495012005,
            "unit": "ns/iter",
            "extra": "iterations: 37902\ncpu: 18493.136430795323 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 36316.801939057295,
            "unit": "ns/iter",
            "extra": "iterations: 19287\ncpu: 36315.5701249575 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 72026.98951486759,
            "unit": "ns/iter",
            "extra": "iterations: 9728\ncpu: 72030.48601973841 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 143405.79496126046,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 143400.94858664036 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 286275.3465468237,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 286263.692684906 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 571846.8993453489,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 571843.0351881933 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 24.302890126872377,
            "unit": "ns/iter",
            "extra": "iterations: 28840983\ncpu: 24.300959644822107 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.302718446272173,
            "unit": "ns/iter",
            "extra": "iterations: 22340482\ncpu: 31.300030411161256 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 44.70782761449773,
            "unit": "ns/iter",
            "extra": "iterations: 15721763\ncpu: 44.70525678322463 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 70.66943785889083,
            "unit": "ns/iter",
            "extra": "iterations: 9918595\ncpu: 70.66156890164375 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 115.2334563521436,
            "unit": "ns/iter",
            "extra": "iterations: 6072784\ncpu: 115.21710964855656 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 206.8856775164578,
            "unit": "ns/iter",
            "extra": "iterations: 3396471\ncpu: 206.8583544508403 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 383.38262684535744,
            "unit": "ns/iter",
            "extra": "iterations: 1824919\ncpu: 383.3303045231049 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 745.3717742159477,
            "unit": "ns/iter",
            "extra": "iterations: 935974\ncpu: 745.3455715650225 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1461.4188401375955,
            "unit": "ns/iter",
            "extra": "iterations: 478574\ncpu: 1461.2435443630523 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2890.0116435640166,
            "unit": "ns/iter",
            "extra": "iterations: 242108\ncpu: 2889.82967931667 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5744.79600735791,
            "unit": "ns/iter",
            "extra": "iterations: 121774\ncpu: 5744.2296056629575 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 213.08585914021666,
            "unit": "ns/iter",
            "extra": "iterations: 3270671\ncpu: 213.0812240057158 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 422.3884437246355,
            "unit": "ns/iter",
            "extra": "iterations: 1659687\ncpu: 422.33503184636635 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 831.1172638012688,
            "unit": "ns/iter",
            "extra": "iterations: 845538\ncpu: 831.0857323975948 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1605.9105196049982,
            "unit": "ns/iter",
            "extra": "iterations: 436062\ncpu: 1605.7576995931736 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3170.1539502545934,
            "unit": "ns/iter",
            "extra": "iterations: 220201\ncpu: 3170.000131697849 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6387.087006543487,
            "unit": "ns/iter",
            "extra": "iterations: 111256\ncpu: 6386.637871215931 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12543.819773078087,
            "unit": "ns/iter",
            "extra": "iterations: 55702\ncpu: 12542.718160927776 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25052.44941083749,
            "unit": "ns/iter",
            "extra": "iterations: 27921\ncpu: 25051.364958275135 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 50090.82972934272,
            "unit": "ns/iter",
            "extra": "iterations: 13966\ncpu: 50088.3031648287 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 100191.81589479807,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 100188.72913093203 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 200200.72740274546,
            "unit": "ns/iter",
            "extra": "iterations: 3496\ncpu: 200186.2279748283 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.779261766135573,
            "unit": "ns/iter",
            "extra": "iterations: 26076425\ncpu: 26.778261168852822 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.42371504386668,
            "unit": "ns/iter",
            "extra": "iterations: 27684233\ncpu: 25.421426087549687 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 28.96475767352012,
            "unit": "ns/iter",
            "extra": "iterations: 24534731\ncpu: 28.962619154047463 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 38.44894642529529,
            "unit": "ns/iter",
            "extra": "iterations: 18581549\ncpu: 38.44604419147185 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 43.757326294818334,
            "unit": "ns/iter",
            "extra": "iterations: 16018909\ncpu: 43.75521903520361 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 65.83029568131968,
            "unit": "ns/iter",
            "extra": "iterations: 10625257\ncpu: 65.82325349871593 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 97.58537917325367,
            "unit": "ns/iter",
            "extra": "iterations: 7203765\ncpu: 97.58388523223582 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 160.2519001167771,
            "unit": "ns/iter",
            "extra": "iterations: 4369863\ncpu: 160.24340419825631 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 295.7207667839516,
            "unit": "ns/iter",
            "extra": "iterations: 2368855\ncpu: 295.71174765868017 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 543.409205055985,
            "unit": "ns/iter",
            "extra": "iterations: 1289009\ncpu: 543.3893494925194 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1038.0261541315706,
            "unit": "ns/iter",
            "extra": "iterations: 673775\ncpu: 1037.944091128344 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 628.2928512350481,
            "unit": "ns/iter",
            "extra": "iterations: 1112401\ncpu: 629.7456681504115 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 629.0984383591573,
            "unit": "ns/iter",
            "extra": "iterations: 1111589\ncpu: 630.3061815122492 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 629.1416019692693,
            "unit": "ns/iter",
            "extra": "iterations: 1112880\ncpu: 630.4592256121405 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 673.9522175169706,
            "unit": "ns/iter",
            "extra": "iterations: 1030210\ncpu: 679.5929208550095 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 674.7748119424416,
            "unit": "ns/iter",
            "extra": "iterations: 1029242\ncpu: 680.3988770349879 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 675.5013651739501,
            "unit": "ns/iter",
            "extra": "iterations: 1030640\ncpu: 680.9714682110854 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 678.2762550918028,
            "unit": "ns/iter",
            "extra": "iterations: 1024430\ncpu: 683.997629904962 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 681.6480585775827,
            "unit": "ns/iter",
            "extra": "iterations: 1018911\ncpu: 687.0773394345758 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 740.5563135706849,
            "unit": "ns/iter",
            "extra": "iterations: 940759\ncpu: 743.9726603740655 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 772.408926959318,
            "unit": "ns/iter",
            "extra": "iterations: 905751\ncpu: 774.9708451861113 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 800.1791428310976,
            "unit": "ns/iter",
            "extra": "iterations: 872343\ncpu: 803.9859963461214 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 615.7075020522532,
            "unit": "ns/iter",
            "extra": "iterations: 1133290\ncpu: 617.6239347346941 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 636.9133147588302,
            "unit": "ns/iter",
            "extra": "iterations: 1095919\ncpu: 638.778465378985 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 641.6622228596419,
            "unit": "ns/iter",
            "extra": "iterations: 1088706\ncpu: 643.5324724985765 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 655.3939160181169,
            "unit": "ns/iter",
            "extra": "iterations: 1066867\ncpu: 656.8196016935212 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 676.022552064026,
            "unit": "ns/iter",
            "extra": "iterations: 1034007\ncpu: 677.490301323391 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 708.2058441534913,
            "unit": "ns/iter",
            "extra": "iterations: 987242\ncpu: 709.8895792565763 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 772.6297344037209,
            "unit": "ns/iter",
            "extra": "iterations: 907427\ncpu: 774.2233193377231 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 907.7828618792119,
            "unit": "ns/iter",
            "extra": "iterations: 771205\ncpu: 909.4394071668754 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1160.2819086395486,
            "unit": "ns/iter",
            "extra": "iterations: 603543\ncpu: 1161.9905259589143 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1656.8149081568126,
            "unit": "ns/iter",
            "extra": "iterations: 421742\ncpu: 1658.614845110316 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2651.733962121491,
            "unit": "ns/iter",
            "extra": "iterations: 263361\ncpu: 2653.050637720833 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 665.0346029759884,
            "unit": "ns/iter",
            "extra": "iterations: 1032281\ncpu: 678.2689635797612 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c46aee76ad8bc365fd3a4c8b1fda0c605ef5549b",
          "message": "ci: replace default CodeQL workflow with custom manual build (#78)",
          "timestamp": "2025-11-03T21:02:17Z",
          "url": "https://github.com/3uclid3/ant/commit/c46aee76ad8bc365fd3a4c8b1fda0c605ef5549b"
        },
        "date": 1762226598372,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1269.5541413591106,
            "unit": "ns/iter",
            "extra": "iterations: 552202\ncpu: 1271.2039126985665 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1769.8255479038626,
            "unit": "ns/iter",
            "extra": "iterations: 395375\ncpu: 1771.3434739171248 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2782.8902579601113,
            "unit": "ns/iter",
            "extra": "iterations: 251471\ncpu: 2782.1480647868707 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 5066.419743902741,
            "unit": "ns/iter",
            "extra": "iterations: 138625\ncpu: 5068.521038773862 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9327.814397808848,
            "unit": "ns/iter",
            "extra": "iterations: 74983\ncpu: 9328.10867796691 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17893.21895369,
            "unit": "ns/iter",
            "extra": "iterations: 39127\ncpu: 17893.892938381414 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 34968.45283869834,
            "unit": "ns/iter",
            "extra": "iterations: 20027\ncpu: 34963.23543216966 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69177.68632033753,
            "unit": "ns/iter",
            "extra": "iterations: 10125\ncpu: 69180.92019752605 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 137603.10925561024,
            "unit": "ns/iter",
            "extra": "iterations: 5089\ncpu: 137603.182354096 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 274509.30983073416,
            "unit": "ns/iter",
            "extra": "iterations: 2553\ncpu: 274515.1229925557 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 549750.2161311912,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 549747.6875489703 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 23.092472964205363,
            "unit": "ns/iter",
            "extra": "iterations: 30204493\ncpu: 23.08816979646041 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 29.85937026866283,
            "unit": "ns/iter",
            "extra": "iterations: 23622423\ncpu: 29.854065774709092 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 43.011098420535376,
            "unit": "ns/iter",
            "extra": "iterations: 16326197\ncpu: 43.00687820929767 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 68.99779204737624,
            "unit": "ns/iter",
            "extra": "iterations: 10170961\ncpu: 68.99143256964615 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 118.39441299432197,
            "unit": "ns/iter",
            "extra": "iterations: 5901408\ncpu: 118.37936200987977 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 217.71526947222935,
            "unit": "ns/iter",
            "extra": "iterations: 3220740\ncpu: 217.68438371305962 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 416.2833271347075,
            "unit": "ns/iter",
            "extra": "iterations: 1680485\ncpu: 416.22937782842416 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 808.7369074025934,
            "unit": "ns/iter",
            "extra": "iterations: 866482\ncpu: 808.6024337493461 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1599.9358222799183,
            "unit": "ns/iter",
            "extra": "iterations: 437722\ncpu: 1599.7575950032215 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 3188.88954959824,
            "unit": "ns/iter",
            "extra": "iterations: 219293\ncpu: 3188.394426634677 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 6403.885383528713,
            "unit": "ns/iter",
            "extra": "iterations: 109705\ncpu: 6402.851720523219 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 242.71519308932375,
            "unit": "ns/iter",
            "extra": "iterations: 2887135\ncpu: 242.68450176385903 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 472.11311734186864,
            "unit": "ns/iter",
            "extra": "iterations: 1482991\ncpu: 472.0493543116592 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 933.8153853945802,
            "unit": "ns/iter",
            "extra": "iterations: 750179\ncpu: 933.6857283395051 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1861.379676885385,
            "unit": "ns/iter",
            "extra": "iterations: 376399\ncpu: 1861.214352322931 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3879.5184791954703,
            "unit": "ns/iter",
            "extra": "iterations: 178011\ncpu: 3878.9111459404276 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 7977.8703625749695,
            "unit": "ns/iter",
            "extra": "iterations: 87899\ncpu: 7977.186646036926 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 16105.338265947943,
            "unit": "ns/iter",
            "extra": "iterations: 43655\ncpu: 16104.028267094276 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 32256.631939095434,
            "unit": "ns/iter",
            "extra": "iterations: 22067\ncpu: 32253.91969909828 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 58974.81184698444,
            "unit": "ns/iter",
            "extra": "iterations: 11868\ncpu: 58969.673660262895 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 125946.29063588561,
            "unit": "ns/iter",
            "extra": "iterations: 5457\ncpu: 125930.03261865531 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 252144.1058446553,
            "unit": "ns/iter",
            "extra": "iterations: 2806\ncpu: 252104.08695652135 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 25.566103355469867,
            "unit": "ns/iter",
            "extra": "iterations: 27276989\ncpu: 25.563386193395466 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 24.66498483621689,
            "unit": "ns/iter",
            "extra": "iterations: 28416063\ncpu: 24.661416431966657 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 27.97729384148225,
            "unit": "ns/iter",
            "extra": "iterations: 25010087\ncpu: 27.973142156602613 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 32.32116958106315,
            "unit": "ns/iter",
            "extra": "iterations: 21658969\ncpu: 32.31751072731125 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 39.538630588943725,
            "unit": "ns/iter",
            "extra": "iterations: 17642431\ncpu: 39.53406863260503 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 54.78019287954477,
            "unit": "ns/iter",
            "extra": "iterations: 12788189\ncpu: 54.76958582642166 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 88.56883535023036,
            "unit": "ns/iter",
            "extra": "iterations: 7909468\ncpu: 88.55848408514986 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 156.54316381704388,
            "unit": "ns/iter",
            "extra": "iterations: 4489362\ncpu: 156.52671248163932 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 291.0964674715079,
            "unit": "ns/iter",
            "extra": "iterations: 2405246\ncpu: 291.06849819103604 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 563.5726807836259,
            "unit": "ns/iter",
            "extra": "iterations: 1246822\ncpu: 563.5424022033599 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1110.7926353291982,
            "unit": "ns/iter",
            "extra": "iterations: 629003\ncpu: 1110.733705562611 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 769.5744407276508,
            "unit": "ns/iter",
            "extra": "iterations: 905982\ncpu: 773.0973054694756 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 767.5639968563388,
            "unit": "ns/iter",
            "extra": "iterations: 908381\ncpu: 771.0550969215412 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 768.8434070504024,
            "unit": "ns/iter",
            "extra": "iterations: 906363\ncpu: 772.2776183465356 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 814.8263353531555,
            "unit": "ns/iter",
            "extra": "iterations: 858304\ncpu: 818.2309741091657 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 816.021155464038,
            "unit": "ns/iter",
            "extra": "iterations: 856940\ncpu: 818.9217973217288 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 815.0239253038583,
            "unit": "ns/iter",
            "extra": "iterations: 855455\ncpu: 818.2547439691263 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 816.3585657100163,
            "unit": "ns/iter",
            "extra": "iterations: 853916\ncpu: 819.3284889839964 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 826.3473843263024,
            "unit": "ns/iter",
            "extra": "iterations: 849834\ncpu: 829.9609158985681 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 873.7477126554979,
            "unit": "ns/iter",
            "extra": "iterations: 798300\ncpu: 879.2782274821082 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 899.1452197554829,
            "unit": "ns/iter",
            "extra": "iterations: 774578\ncpu: 905.842311553573 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 940.8500554176834,
            "unit": "ns/iter",
            "extra": "iterations: 738300\ncpu: 948.4719504282797 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 764.0191132092058,
            "unit": "ns/iter",
            "extra": "iterations: 913873\ncpu: 765.5245958699545 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 779.8706005346568,
            "unit": "ns/iter",
            "extra": "iterations: 897948\ncpu: 781.8465100442147 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 784.161703548295,
            "unit": "ns/iter",
            "extra": "iterations: 891811\ncpu: 785.6960880710891 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 794.0343420592463,
            "unit": "ns/iter",
            "extra": "iterations: 880406\ncpu: 795.7751276149222 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 816.1752461305535,
            "unit": "ns/iter",
            "extra": "iterations: 858855\ncpu: 817.1346513677355 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 850.4570826279836,
            "unit": "ns/iter",
            "extra": "iterations: 823127\ncpu: 851.1748430091814 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 911.140124926394,
            "unit": "ns/iter",
            "extra": "iterations: 766837\ncpu: 912.4999106758802 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 1050.1381667992696,
            "unit": "ns/iter",
            "extra": "iterations: 663249\ncpu: 1051.6146530106323 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1330.4787272311505,
            "unit": "ns/iter",
            "extra": "iterations: 528445\ncpu: 1331.524094280288 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1864.3347948721266,
            "unit": "ns/iter",
            "extra": "iterations: 374740\ncpu: 1865.684116989414 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2953.5278166733165,
            "unit": "ns/iter",
            "extra": "iterations: 236908\ncpu: 2954.946907682737 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 797.1698411925094,
            "unit": "ns/iter",
            "extra": "iterations: 882142\ncpu: 796.3957446709613 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c46aee76ad8bc365fd3a4c8b1fda0c605ef5549b",
          "message": "ci: replace default CodeQL workflow with custom manual build (#78)",
          "timestamp": "2025-11-03T21:02:17Z",
          "url": "https://github.com/3uclid3/ant/commit/c46aee76ad8bc365fd3a4c8b1fda0c605ef5549b"
        },
        "date": 1762313063830,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1164.6678820312231,
            "unit": "ns/iter",
            "extra": "iterations: 599546\ncpu: 1166.2152295238132 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1702.5681029414543,
            "unit": "ns/iter",
            "extra": "iterations: 410621\ncpu: 1703.6336402669176 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2778.7083094989634,
            "unit": "ns/iter",
            "extra": "iterations: 251784\ncpu: 2780.8013575130935 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 5093.198525745582,
            "unit": "ns/iter",
            "extra": "iterations: 137156\ncpu: 5094.64247280322 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9552.947565747249,
            "unit": "ns/iter",
            "extra": "iterations: 73349\ncpu: 9553.658877419906 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 18461.346945210476,
            "unit": "ns/iter",
            "extra": "iterations: 37908\ncpu: 18462.580062256537 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 36322.367804208916,
            "unit": "ns/iter",
            "extra": "iterations: 19282\ncpu: 36323.6516440181 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 71962.86959646511,
            "unit": "ns/iter",
            "extra": "iterations: 9716\ncpu: 71957.00349938181 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 145787.50173937308,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 145512.87804379562 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 286122.5169457362,
            "unit": "ns/iter",
            "extra": "iterations: 2449\ncpu: 286131.03348307265 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 571795.2591687813,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 571737.0268949108 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 24.429773943961834,
            "unit": "ns/iter",
            "extra": "iterations: 28885404\ncpu: 24.42582894114968 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.251731686255155,
            "unit": "ns/iter",
            "extra": "iterations: 22374001\ncpu: 31.24744903694251 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 44.252576621899046,
            "unit": "ns/iter",
            "extra": "iterations: 15832843\ncpu: 44.24706510384766 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 71.38682531793647,
            "unit": "ns/iter",
            "extra": "iterations: 9822886\ncpu: 71.38185630984631 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 115.98308093274969,
            "unit": "ns/iter",
            "extra": "iterations: 6034257\ncpu: 115.97432923390586 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 205.37606466903642,
            "unit": "ns/iter",
            "extra": "iterations: 3405401\ncpu: 205.366434966102 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 386.21240310247975,
            "unit": "ns/iter",
            "extra": "iterations: 1812224\ncpu: 386.1931797614431 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 746.0401365071377,
            "unit": "ns/iter",
            "extra": "iterations: 939145\ncpu: 745.9951828524903 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1466.0791839239878,
            "unit": "ns/iter",
            "extra": "iterations: 479024\ncpu: 1465.964966264738 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2891.9380882096825,
            "unit": "ns/iter",
            "extra": "iterations: 241198\ncpu: 2891.759707791934 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5751.567068849037,
            "unit": "ns/iter",
            "extra": "iterations: 121338\ncpu: 5751.086065371113 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 213.78903802749593,
            "unit": "ns/iter",
            "extra": "iterations: 3275998\ncpu: 213.76748947954192 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 423.1542970750422,
            "unit": "ns/iter",
            "extra": "iterations: 1659850\ncpu: 423.1032671626951 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 833.2107926422643,
            "unit": "ns/iter",
            "extra": "iterations: 841073\ncpu: 833.1168519260511 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1606.8876805335597,
            "unit": "ns/iter",
            "extra": "iterations: 434199\ncpu: 1606.7554462354844 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3170.8476981576455,
            "unit": "ns/iter",
            "extra": "iterations: 220910\ncpu: 3170.5308632474844 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6293.739318355751,
            "unit": "ns/iter",
            "extra": "iterations: 111055\ncpu: 6293.47798838415 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12551.810903688729,
            "unit": "ns/iter",
            "extra": "iterations: 55871\ncpu: 12551.60285300068 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25039.38331006357,
            "unit": "ns/iter",
            "extra": "iterations: 27933\ncpu: 25038.577417391534 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 50196.03506130363,
            "unit": "ns/iter",
            "extra": "iterations: 13947\ncpu: 50192.85989818601 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 100157.14367323642,
            "unit": "ns/iter",
            "extra": "iterations: 7002\ncpu: 100148.27235075679 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 200246.56269637492,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 200228.18823193296 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 32.41451641336953,
            "unit": "ns/iter",
            "extra": "iterations: 21385310\ncpu: 32.41159964480291 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.84051644918362,
            "unit": "ns/iter",
            "extra": "iterations: 27471667\ncpu: 25.83794711110915 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 28.62605296005408,
            "unit": "ns/iter",
            "extra": "iterations: 24349333\ncpu: 28.623554370051945 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 34.85259753665867,
            "unit": "ns/iter",
            "extra": "iterations: 20023702\ncpu: 34.84990178139892 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 43.39429448774375,
            "unit": "ns/iter",
            "extra": "iterations: 16037333\ncpu: 43.39088032904222 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 65.55026742115905,
            "unit": "ns/iter",
            "extra": "iterations: 10674548\ncpu: 65.54410837817188 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 96.65768673469198,
            "unit": "ns/iter",
            "extra": "iterations: 7242334\ncpu: 96.65074546410071 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 159.77913517300055,
            "unit": "ns/iter",
            "extra": "iterations: 4382495\ncpu: 159.76593333249608 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.0375719527848,
            "unit": "ns/iter",
            "extra": "iterations: 2357796\ncpu: 296.0149152004647 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 544.3864818602984,
            "unit": "ns/iter",
            "extra": "iterations: 1287618\ncpu: 544.3568721468644 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1037.2165991272939,
            "unit": "ns/iter",
            "extra": "iterations: 674915\ncpu: 1037.1613284635819 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 623.7999277917389,
            "unit": "ns/iter",
            "extra": "iterations: 1118946\ncpu: 626.2382366990221 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 624.4036300067837,
            "unit": "ns/iter",
            "extra": "iterations: 1119778\ncpu: 626.7368790934515 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 623.5691399957917,
            "unit": "ns/iter",
            "extra": "iterations: 1119099\ncpu: 625.9587695051862 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 667.9846925211663,
            "unit": "ns/iter",
            "extra": "iterations: 1047985\ncpu: 667.9995209848264 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 673.5589263682155,
            "unit": "ns/iter",
            "extra": "iterations: 1045678\ncpu: 676.5840717682003 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 673.5434234884259,
            "unit": "ns/iter",
            "extra": "iterations: 1030180\ncpu: 679.5554650620222 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 676.8031907242251,
            "unit": "ns/iter",
            "extra": "iterations: 1027604\ncpu: 682.9848570127781 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 680.6124758306745,
            "unit": "ns/iter",
            "extra": "iterations: 1019748\ncpu: 685.6547480357691 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 734.0734294866488,
            "unit": "ns/iter",
            "extra": "iterations: 946173\ncpu: 740.4645091307035 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 767.9980698386184,
            "unit": "ns/iter",
            "extra": "iterations: 906664\ncpu: 772.7608529699568 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 797.7854122664144,
            "unit": "ns/iter",
            "extra": "iterations: 866550\ncpu: 807.4349558630157 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 614.5211180538168,
            "unit": "ns/iter",
            "extra": "iterations: 1132467\ncpu: 616.3596970155434 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 633.0843382249691,
            "unit": "ns/iter",
            "extra": "iterations: 1102525\ncpu: 634.6865350015377 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 637.9613222905934,
            "unit": "ns/iter",
            "extra": "iterations: 1094610\ncpu: 639.8295721727843 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 649.4041522000223,
            "unit": "ns/iter",
            "extra": "iterations: 1074803\ncpu: 651.2799303705933 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 672.1133945159218,
            "unit": "ns/iter",
            "extra": "iterations: 1038410\ncpu: 673.8602334250667 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 705.6938906684472,
            "unit": "ns/iter",
            "extra": "iterations: 993694\ncpu: 707.4343711676645 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 777.1224924406893,
            "unit": "ns/iter",
            "extra": "iterations: 904815\ncpu: 777.5907881722464 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 908.8097364572815,
            "unit": "ns/iter",
            "extra": "iterations: 770095\ncpu: 910.1491699089978 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1156.5547046396855,
            "unit": "ns/iter",
            "extra": "iterations: 605625\ncpu: 1158.2856866850755 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1650.5722013095312,
            "unit": "ns/iter",
            "extra": "iterations: 424819\ncpu: 1652.1863452349007 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2647.6872426798486,
            "unit": "ns/iter",
            "extra": "iterations: 265001\ncpu: 2649.250033015244 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 665.1685355877685,
            "unit": "ns/iter",
            "extra": "iterations: 1039187\ncpu: 673.5590408690725 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c46aee76ad8bc365fd3a4c8b1fda0c605ef5549b",
          "message": "ci: replace default CodeQL workflow with custom manual build (#78)",
          "timestamp": "2025-11-03T21:02:17Z",
          "url": "https://github.com/3uclid3/ant/commit/c46aee76ad8bc365fd3a4c8b1fda0c605ef5549b"
        },
        "date": 1762399587082,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1164.2743796508666,
            "unit": "ns/iter",
            "extra": "iterations: 599968\ncpu: 1165.7348975281038 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1704.2224329048206,
            "unit": "ns/iter",
            "extra": "iterations: 410843\ncpu: 1705.2505969438823 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2849.9637885654784,
            "unit": "ns/iter",
            "extra": "iterations: 251716\ncpu: 2853.4628907179026 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 5100.417433643969,
            "unit": "ns/iter",
            "extra": "iterations: 137447\ncpu: 5102.226174452077 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9567.334803077294,
            "unit": "ns/iter",
            "extra": "iterations: 73255\ncpu: 9566.92530202687 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 18506.120261684686,
            "unit": "ns/iter",
            "extra": "iterations: 37909\ncpu: 18508.384394208595 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 36302.40517103634,
            "unit": "ns/iter",
            "extra": "iterations: 19261\ncpu: 36304.69383728577 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 71991.19853998671,
            "unit": "ns/iter",
            "extra": "iterations: 9726\ncpu: 71987.75591199473 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 143329.6501333421,
            "unit": "ns/iter",
            "extra": "iterations: 4879\ncpu: 143313.4154540006 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 286307.0016353156,
            "unit": "ns/iter",
            "extra": "iterations: 2446\ncpu: 286278.55314799503 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 573165.1993437593,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 573107.5455291593 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 24.41015281428549,
            "unit": "ns/iter",
            "extra": "iterations: 28791091\ncpu: 24.405283599707975 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.392488652066845,
            "unit": "ns/iter",
            "extra": "iterations: 22231802\ncpu: 31.38582868811082 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 44.54230973484679,
            "unit": "ns/iter",
            "extra": "iterations: 15689368\ncpu: 44.5397639344045 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 71.16326897526432,
            "unit": "ns/iter",
            "extra": "iterations: 9828242\ncpu: 71.15563383563408 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 117.34128357202671,
            "unit": "ns/iter",
            "extra": "iterations: 5970261\ncpu: 117.26763335807246 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 213.25864184258086,
            "unit": "ns/iter",
            "extra": "iterations: 3334503\ncpu: 213.21783066322016 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 394.1883502620193,
            "unit": "ns/iter",
            "extra": "iterations: 1774306\ncpu: 394.13517679588415 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 773.8666001407264,
            "unit": "ns/iter",
            "extra": "iterations: 910923\ncpu: 773.8373078734428 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1505.3923788107031,
            "unit": "ns/iter",
            "extra": "iterations: 463366\ncpu: 1505.3150317459583 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2984.0027914242905,
            "unit": "ns/iter",
            "extra": "iterations: 234289\ncpu: 2983.959515811676 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5943.038080453418,
            "unit": "ns/iter",
            "extra": "iterations: 117882\ncpu: 5942.432305186532 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 213.4121566924496,
            "unit": "ns/iter",
            "extra": "iterations: 3288378\ncpu: 213.3974378857904 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 422.3919931390127,
            "unit": "ns/iter",
            "extra": "iterations: 1656904\ncpu: 422.32247794682195 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 823.2546921800748,
            "unit": "ns/iter",
            "extra": "iterations: 851683\ncpu: 823.1402035733946 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1603.3883498710193,
            "unit": "ns/iter",
            "extra": "iterations: 435772\ncpu: 1603.2866912054972 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3168.512420304239,
            "unit": "ns/iter",
            "extra": "iterations: 220526\ncpu: 3168.353191913875 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6296.779308608332,
            "unit": "ns/iter",
            "extra": "iterations: 111196\ncpu: 6296.189467247019 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12563.280590868395,
            "unit": "ns/iter",
            "extra": "iterations: 55850\ncpu: 12561.944619516515 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25125.4706282198,
            "unit": "ns/iter",
            "extra": "iterations: 27952\ncpu: 25124.734437607283 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 50137.19213443012,
            "unit": "ns/iter",
            "extra": "iterations: 13985\ncpu: 50133.14451197716 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 100143.24089155564,
            "unit": "ns/iter",
            "extra": "iterations: 6999\ncpu: 100139.28332618963 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 200313.35920939766,
            "unit": "ns/iter",
            "extra": "iterations: 3491\ncpu: 200297.5806359201 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.257419302803537,
            "unit": "ns/iter",
            "extra": "iterations: 26656750\ncpu: 26.254291427124397 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.158923939029542,
            "unit": "ns/iter",
            "extra": "iterations: 27722444\ncpu: 25.155813426839327 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 28.375777548161217,
            "unit": "ns/iter",
            "extra": "iterations: 24587866\ncpu: 28.3715700256378 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 35.5988713052284,
            "unit": "ns/iter",
            "extra": "iterations: 19382388\ncpu: 35.59490022591669 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 44.75563201802494,
            "unit": "ns/iter",
            "extra": "iterations: 15626548\ncpu: 44.7514978356063 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 65.44847887849517,
            "unit": "ns/iter",
            "extra": "iterations: 10695924\ncpu: 65.43931155456924 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 97.61431952824167,
            "unit": "ns/iter",
            "extra": "iterations: 7179622\ncpu: 97.60752195589204 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 160.7955349927142,
            "unit": "ns/iter",
            "extra": "iterations: 4354349\ncpu: 160.78746444072416 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 294.9810295192735,
            "unit": "ns/iter",
            "extra": "iterations: 2374584\ncpu: 294.97036449332 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 544.5513205226305,
            "unit": "ns/iter",
            "extra": "iterations: 1291004\ncpu: 544.5183980839735 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1035.5786323711152,
            "unit": "ns/iter",
            "extra": "iterations: 675695\ncpu: 1035.4796927607883 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 623.7809216426988,
            "unit": "ns/iter",
            "extra": "iterations: 1118189\ncpu: 625.7430568548583 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 623.0470819696399,
            "unit": "ns/iter",
            "extra": "iterations: 1113441\ncpu: 625.478376494104 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 623.7186094639562,
            "unit": "ns/iter",
            "extra": "iterations: 1116292\ncpu: 626.1292627718304 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 670.7352030500496,
            "unit": "ns/iter",
            "extra": "iterations: 1032814\ncpu: 677.2037762866048 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 671.7915039399301,
            "unit": "ns/iter",
            "extra": "iterations: 1029914\ncpu: 678.7933458539225 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 673.5039716532316,
            "unit": "ns/iter",
            "extra": "iterations: 1031810\ncpu: 680.3937459411221 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 675.9045490205503,
            "unit": "ns/iter",
            "extra": "iterations: 1027428\ncpu: 682.6640484771677 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 676.930197709266,
            "unit": "ns/iter",
            "extra": "iterations: 1024379\ncpu: 683.9727327472536 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 739.4771861972539,
            "unit": "ns/iter",
            "extra": "iterations: 940023\ncpu: 745.4626152752272 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 767.1873357356939,
            "unit": "ns/iter",
            "extra": "iterations: 903266\ncpu: 772.8374853057735 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 811.5994168094908,
            "unit": "ns/iter",
            "extra": "iterations: 855645\ncpu: 819.5112552507957 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 615.0926839609315,
            "unit": "ns/iter",
            "extra": "iterations: 1135558\ncpu: 616.8401332231805 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 635.3723216072462,
            "unit": "ns/iter",
            "extra": "iterations: 1100186\ncpu: 637.1983728192736 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 645.3723608034894,
            "unit": "ns/iter",
            "extra": "iterations: 1079743\ncpu: 647.5208507984362 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 662.4146255163984,
            "unit": "ns/iter",
            "extra": "iterations: 1059901\ncpu: 664.4967709286643 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 678.4388720464625,
            "unit": "ns/iter",
            "extra": "iterations: 1029300\ncpu: 680.2506577262667 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 705.8681705196822,
            "unit": "ns/iter",
            "extra": "iterations: 983513\ncpu: 707.715054091524 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 769.769914452722,
            "unit": "ns/iter",
            "extra": "iterations: 898066\ncpu: 771.5488494208477 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 905.4689769501584,
            "unit": "ns/iter",
            "extra": "iterations: 773102\ncpu: 907.2395971102283 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1153.3469833255447,
            "unit": "ns/iter",
            "extra": "iterations: 604885\ncpu: 1154.8971325213952 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1651.8358288566276,
            "unit": "ns/iter",
            "extra": "iterations: 423625\ncpu: 1653.346107982775 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2646.3738593309245,
            "unit": "ns/iter",
            "extra": "iterations: 264768\ncpu: 2648.0170300133004 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 663.2755987704462,
            "unit": "ns/iter",
            "extra": "iterations: 1041525\ncpu: 671.7487357475395 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28772dec044d5311c8abee37dd067d79018bf781",
          "message": "chore(ci): include src in Codecov paths (#82)\n\nAdds the source directory to coverage filtering so gcovr includes implementation files (src) alongside headers when generating XML reports.\n\nEnsures coverage metrics reflect actual source code, improving accuracy of CI coverage checks and reports.",
          "timestamp": "2025-11-06T04:55:47Z",
          "url": "https://github.com/3uclid3/ant/commit/28772dec044d5311c8abee37dd067d79018bf781"
        },
        "date": 1762485826667,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1154.0622083450394,
            "unit": "ns/iter",
            "extra": "iterations: 605546\ncpu: 1155.4214378428703 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1685.848579128834,
            "unit": "ns/iter",
            "extra": "iterations: 418509\ncpu: 1687.3673756122848 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2713.5246583394555,
            "unit": "ns/iter",
            "extra": "iterations: 257459\ncpu: 2714.4872193242804 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4937.831725770544,
            "unit": "ns/iter",
            "extra": "iterations: 141103\ncpu: 4939.183256202249 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9235.918994036436,
            "unit": "ns/iter",
            "extra": "iterations: 75513\ncpu: 9234.361010687204 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17846.886140873263,
            "unit": "ns/iter",
            "extra": "iterations: 39180\ncpu: 17849.341271058423 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35038.369277742495,
            "unit": "ns/iter",
            "extra": "iterations: 19966\ncpu: 35037.06145447062 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69455.53715483064,
            "unit": "ns/iter",
            "extra": "iterations: 10066\ncpu: 69452.29475461994 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138354.66085933012,
            "unit": "ns/iter",
            "extra": "iterations: 5051\ncpu: 138331.42664819793 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275930.76171710476,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 275904.7014572802 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 555231.047581398,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 555197.406026986 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.28570228340442,
            "unit": "ns/iter",
            "extra": "iterations: 27637539\ncpu: 25.282809370255425 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.78242943740426,
            "unit": "ns/iter",
            "extra": "iterations: 22066294\ncpu: 31.778297615358586 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.83258852404333,
            "unit": "ns/iter",
            "extra": "iterations: 15203892\ncpu: 45.830329694528224 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 70.29906152290415,
            "unit": "ns/iter",
            "extra": "iterations: 9943663\ncpu: 70.29238179129759 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 115.86897451414018,
            "unit": "ns/iter",
            "extra": "iterations: 6035032\ncpu: 115.8576098685143 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.55230523471903,
            "unit": "ns/iter",
            "extra": "iterations: 3422363\ncpu: 204.54533285919672 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 384.90048136466146,
            "unit": "ns/iter",
            "extra": "iterations: 1830421\ncpu: 384.86699781088686 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 753.3941634829594,
            "unit": "ns/iter",
            "extra": "iterations: 939156\ncpu: 753.3606887460672 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1457.6085188592601,
            "unit": "ns/iter",
            "extra": "iterations: 479313\ncpu: 1457.4500274351037 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2896.6938129853747,
            "unit": "ns/iter",
            "extra": "iterations: 242120\ncpu: 2896.4439121097007 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5764.050933145194,
            "unit": "ns/iter",
            "extra": "iterations: 121846\ncpu: 5763.516233606335 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 204.4479011322682,
            "unit": "ns/iter",
            "extra": "iterations: 3422512\ncpu: 204.43107810871132 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 412.0269888309328,
            "unit": "ns/iter",
            "extra": "iterations: 1701037\ncpu: 411.9934304779956 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 819.1435062024506,
            "unit": "ns/iter",
            "extra": "iterations: 854423\ncpu: 819.0672980479189 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1580.4649459987193,
            "unit": "ns/iter",
            "extra": "iterations: 443045\ncpu: 1580.2530352447284 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3116.2788545843614,
            "unit": "ns/iter",
            "extra": "iterations: 224687\ncpu: 3115.9691303902646 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6202.0579186801915,
            "unit": "ns/iter",
            "extra": "iterations: 112986\ncpu: 6201.543970049375 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12333.362783575805,
            "unit": "ns/iter",
            "extra": "iterations: 56819\ncpu: 12332.019940512873 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24601.301746248646,
            "unit": "ns/iter",
            "extra": "iterations: 28461\ncpu: 24600.225606970922 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49185.59907316533,
            "unit": "ns/iter",
            "extra": "iterations: 14242\ncpu: 49180.75010532215 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98360.3336608623,
            "unit": "ns/iter",
            "extra": "iterations: 7124\ncpu: 98355.69736103313 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196942.74066798078,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 196924.16531013188 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 28.301820683201417,
            "unit": "ns/iter",
            "extra": "iterations: 24818266\ncpu: 28.300756467031082 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.503817569171364,
            "unit": "ns/iter",
            "extra": "iterations: 26456888\ncpu: 26.502128179247794 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 32.06587973427529,
            "unit": "ns/iter",
            "extra": "iterations: 22243927\ncpu: 32.06557277408807 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 37.96981571624242,
            "unit": "ns/iter",
            "extra": "iterations: 18384203\ncpu: 37.967931054721376 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 46.88274928569012,
            "unit": "ns/iter",
            "extra": "iterations: 15024659\ncpu: 46.87932917479186 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 69.07848447970598,
            "unit": "ns/iter",
            "extra": "iterations: 10097971\ncpu: 69.07614737653742 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 101.29880140540982,
            "unit": "ns/iter",
            "extra": "iterations: 6936624\ncpu: 101.29505318437343 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 163.82303810231505,
            "unit": "ns/iter",
            "extra": "iterations: 4266749\ncpu: 163.81484333857063 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.43130906163094,
            "unit": "ns/iter",
            "extra": "iterations: 2358659\ncpu: 296.42240230571696 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 542.7678090053302,
            "unit": "ns/iter",
            "extra": "iterations: 1292057\ncpu: 542.7322285317169 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1031.3439029706394,
            "unit": "ns/iter",
            "extra": "iterations: 679052\ncpu: 1031.254680053964 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 630.4506351610424,
            "unit": "ns/iter",
            "extra": "iterations: 1112796\ncpu: 629.607291004967 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 630.432077853639,
            "unit": "ns/iter",
            "extra": "iterations: 1112612\ncpu: 629.5675572456863 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 630.0631197713868,
            "unit": "ns/iter",
            "extra": "iterations: 1114231\ncpu: 629.246881481512 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 677.3359819373813,
            "unit": "ns/iter",
            "extra": "iterations: 1027710\ncpu: 682.2923704148093 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 679.2063958208455,
            "unit": "ns/iter",
            "extra": "iterations: 1024856\ncpu: 683.9991325637574 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 676.4503805723613,
            "unit": "ns/iter",
            "extra": "iterations: 1025002\ncpu: 678.8834987630166 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 689.3413717960395,
            "unit": "ns/iter",
            "extra": "iterations: 1007948\ncpu: 690.27577910548 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 690.6522205012689,
            "unit": "ns/iter",
            "extra": "iterations: 1016049\ncpu: 689.2311433831815 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 742.8539816292956,
            "unit": "ns/iter",
            "extra": "iterations: 946696\ncpu: 741.783415161228 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 773.0828684012021,
            "unit": "ns/iter",
            "extra": "iterations: 908235\ncpu: 772.6043369813898 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 817.3389381441199,
            "unit": "ns/iter",
            "extra": "iterations: 857121\ncpu: 817.1777076964571 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 626.8452318317246,
            "unit": "ns/iter",
            "extra": "iterations: 1116457\ncpu: 628.5112619652546 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 643.660937067463,
            "unit": "ns/iter",
            "extra": "iterations: 1087394\ncpu: 645.3712490608897 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 645.9032677235172,
            "unit": "ns/iter",
            "extra": "iterations: 1080756\ncpu: 647.4030391659298 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 661.2832662820413,
            "unit": "ns/iter",
            "extra": "iterations: 1054739\ncpu: 663.0126543134802 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 681.2956502220843,
            "unit": "ns/iter",
            "extra": "iterations: 1026304\ncpu: 682.9272545017219 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 706.6593584995901,
            "unit": "ns/iter",
            "extra": "iterations: 987343\ncpu: 708.4636413160611 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 772.407706983993,
            "unit": "ns/iter",
            "extra": "iterations: 905751\ncpu: 774.0997569973011 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 906.3481232877378,
            "unit": "ns/iter",
            "extra": "iterations: 771175\ncpu: 907.7779207049682 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1157.7291996615631,
            "unit": "ns/iter",
            "extra": "iterations: 606096\ncpu: 1159.136224300076 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1652.9792195618434,
            "unit": "ns/iter",
            "extra": "iterations: 424197\ncpu: 1654.5629860578756 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2633.5124931534297,
            "unit": "ns/iter",
            "extra": "iterations: 265346\ncpu: 2635.396237380742 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 668.526058778362,
            "unit": "ns/iter",
            "extra": "iterations: 1042106\ncpu: 673.0679028823803 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28772dec044d5311c8abee37dd067d79018bf781",
          "message": "chore(ci): include src in Codecov paths (#82)\n\nAdds the source directory to coverage filtering so gcovr includes implementation files (src) alongside headers when generating XML reports.\n\nEnsures coverage metrics reflect actual source code, improving accuracy of CI coverage checks and reports.",
          "timestamp": "2025-11-06T04:55:47Z",
          "url": "https://github.com/3uclid3/ant/commit/28772dec044d5311c8abee37dd067d79018bf781"
        },
        "date": 1762571986676,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1160.1729035700403,
            "unit": "ns/iter",
            "extra": "iterations: 603481\ncpu: 1161.6478861805397 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1676.6255069384156,
            "unit": "ns/iter",
            "extra": "iterations: 416993\ncpu: 1677.9835273014862 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2712.8452999097467,
            "unit": "ns/iter",
            "extra": "iterations: 257899\ncpu: 2714.3423006689645 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4942.327234381732,
            "unit": "ns/iter",
            "extra": "iterations: 141446\ncpu: 4942.449323416703 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9243.999894380071,
            "unit": "ns/iter",
            "extra": "iterations: 75704\ncpu: 9243.218165485392 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17879.01675836831,
            "unit": "ns/iter",
            "extra": "iterations: 39264\ncpu: 17877.500152810273 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35497.19721841672,
            "unit": "ns/iter",
            "extra": "iterations: 19988\ncpu: 35497.85046027591 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69437.63541664105,
            "unit": "ns/iter",
            "extra": "iterations: 10080\ncpu: 69440.01349204926 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138152.677808345,
            "unit": "ns/iter",
            "extra": "iterations: 5056\ncpu: 138146.64220728175 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275614.7463570995,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 275612.7278455949 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 550989.2188983914,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 550952.6779527449 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.276781043832163,
            "unit": "ns/iter",
            "extra": "iterations: 27702645\ncpu: 25.27464471352826 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.6583677321137,
            "unit": "ns/iter",
            "extra": "iterations: 22115610\ncpu: 31.65550323956694 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.06763141288415,
            "unit": "ns/iter",
            "extra": "iterations: 15537765\ncpu: 45.06648974289421 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 69.66029886025942,
            "unit": "ns/iter",
            "extra": "iterations: 10014647\ncpu: 69.6548037090074 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 113.80084372986134,
            "unit": "ns/iter",
            "extra": "iterations: 6151732\ncpu: 113.7983497980732 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.73439556785848,
            "unit": "ns/iter",
            "extra": "iterations: 3435274\ncpu: 204.72535029229064 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 382.53932920316106,
            "unit": "ns/iter",
            "extra": "iterations: 1825590\ncpu: 382.5206574312958 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 751.3336615805887,
            "unit": "ns/iter",
            "extra": "iterations: 940348\ncpu: 751.276109482872 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1458.0980024397115,
            "unit": "ns/iter",
            "extra": "iterations: 480386\ncpu: 1458.000868051943 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2887.9556901195165,
            "unit": "ns/iter",
            "extra": "iterations: 242429\ncpu: 2887.803756976266 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5746.417249570518,
            "unit": "ns/iter",
            "extra": "iterations: 121661\ncpu: 5745.965790187473 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 204.79608153646566,
            "unit": "ns/iter",
            "extra": "iterations: 3415012\ncpu: 204.77346258226964 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 410.79560011973024,
            "unit": "ns/iter",
            "extra": "iterations: 1703910\ncpu: 410.7538027243224 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 822.0899410861474,
            "unit": "ns/iter",
            "extra": "iterations: 853959\ncpu: 822.0140006721658 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1580.607625468444,
            "unit": "ns/iter",
            "extra": "iterations: 443199\ncpu: 1580.4213005895745 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3114.291884601211,
            "unit": "ns/iter",
            "extra": "iterations: 224647\ncpu: 3114.2214986178333 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6184.219575271915,
            "unit": "ns/iter",
            "extra": "iterations: 113296\ncpu: 6183.846684790285 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12324.57661518879,
            "unit": "ns/iter",
            "extra": "iterations: 56464\ncpu: 12323.56083522243 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 25158.2186588924,
            "unit": "ns/iter",
            "extra": "iterations: 28469\ncpu: 25156.42846605082 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49174.90591869772,
            "unit": "ns/iter",
            "extra": "iterations: 14243\ncpu: 49173.017973741495 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98335.02328843874,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 98323.21759259295 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196562.31930415644,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 196549.40263748568 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.733290511642704,
            "unit": "ns/iter",
            "extra": "iterations: 25860726\ncpu: 26.72965031994865 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.95104254019687,
            "unit": "ns/iter",
            "extra": "iterations: 26982221\ncpu: 25.948864068677082 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 27.814781712737602,
            "unit": "ns/iter",
            "extra": "iterations: 24898292\ncpu: 27.812917287659754 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 33.75366148485183,
            "unit": "ns/iter",
            "extra": "iterations: 20744726\ncpu: 33.751108016562966 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 43.57000173323511,
            "unit": "ns/iter",
            "extra": "iterations: 16085516\ncpu: 43.56667345952737 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 65.71874802933645,
            "unit": "ns/iter",
            "extra": "iterations: 10688014\ncpu: 65.71287069796121 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 98.04034564351753,
            "unit": "ns/iter",
            "extra": "iterations: 7163797\ncpu: 98.03129988189278 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 160.84037865411406,
            "unit": "ns/iter",
            "extra": "iterations: 4353102\ncpu: 160.82506382804647 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 297.80597547895746,
            "unit": "ns/iter",
            "extra": "iterations: 2352347\ncpu: 297.77831374367855 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 542.0331940967034,
            "unit": "ns/iter",
            "extra": "iterations: 1293242\ncpu: 541.9646322961996 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1029.9655127824453,
            "unit": "ns/iter",
            "extra": "iterations: 680542\ncpu: 1029.8984574060016 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 632.9247758602684,
            "unit": "ns/iter",
            "extra": "iterations: 1110056\ncpu: 631.8716326015806 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 631.7391754859981,
            "unit": "ns/iter",
            "extra": "iterations: 1109497\ncpu: 630.5946072829926 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 631.7257777956479,
            "unit": "ns/iter",
            "extra": "iterations: 1110355\ncpu: 630.5161934672929 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 677.6804468658258,
            "unit": "ns/iter",
            "extra": "iterations: 1021539\ncpu: 684.0209712991714 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 682.0992517091419,
            "unit": "ns/iter",
            "extra": "iterations: 1016053\ncpu: 687.1548757752704 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 680.0786236671181,
            "unit": "ns/iter",
            "extra": "iterations: 1022631\ncpu: 684.7275948006692 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 686.4552759017884,
            "unit": "ns/iter",
            "extra": "iterations: 1015169\ncpu: 690.0869539936996 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 689.2422672837896,
            "unit": "ns/iter",
            "extra": "iterations: 1010900\ncpu: 692.30018893649 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 751.5564576276072,
            "unit": "ns/iter",
            "extra": "iterations: 929591\ncpu: 752.6031566601999 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 780.416922249578,
            "unit": "ns/iter",
            "extra": "iterations: 896985\ncpu: 779.8781885994391 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 811.4186842388071,
            "unit": "ns/iter",
            "extra": "iterations: 852879\ncpu: 815.5588940490036 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 619.8861754465363,
            "unit": "ns/iter",
            "extra": "iterations: 1128333\ncpu: 621.091636954171 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 645.1000686519617,
            "unit": "ns/iter",
            "extra": "iterations: 1086654\ncpu: 645.3237157396578 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 654.8480226420882,
            "unit": "ns/iter",
            "extra": "iterations: 1072969\ncpu: 652.4650702900839 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 665.2686279932901,
            "unit": "ns/iter",
            "extra": "iterations: 1051562\ncpu: 664.3067208642315 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 693.9404999706579,
            "unit": "ns/iter",
            "extra": "iterations: 1010470\ncpu: 692.5025987837414 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 725.728694386143,
            "unit": "ns/iter",
            "extra": "iterations: 967186\ncpu: 722.933396470074 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 786.1998262720715,
            "unit": "ns/iter",
            "extra": "iterations: 889968\ncpu: 786.1253325911251 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 923.1320605522615,
            "unit": "ns/iter",
            "extra": "iterations: 758334\ncpu: 922.367698148329 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1170.4326466428195,
            "unit": "ns/iter",
            "extra": "iterations: 598292\ncpu: 1169.7768497463358 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1662.094735303574,
            "unit": "ns/iter",
            "extra": "iterations: 421849\ncpu: 1661.7526579283945 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2660.118392083094,
            "unit": "ns/iter",
            "extra": "iterations: 262374\ncpu: 2659.228986107401 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 665.6567403142847,
            "unit": "ns/iter",
            "extra": "iterations: 1038884\ncpu: 674.5370349310386 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "28772dec044d5311c8abee37dd067d79018bf781",
          "message": "chore(ci): include src in Codecov paths (#82)\n\nAdds the source directory to coverage filtering so gcovr includes implementation files (src) alongside headers when generating XML reports.\n\nEnsures coverage metrics reflect actual source code, improving accuracy of CI coverage checks and reports.",
          "timestamp": "2025-11-06T04:55:47Z",
          "url": "https://github.com/3uclid3/ant/commit/28772dec044d5311c8abee37dd067d79018bf781"
        },
        "date": 1762658686453,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1153.433309932289,
            "unit": "ns/iter",
            "extra": "iterations: 605555\ncpu: 1155.2488031639684 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1671.40763997596,
            "unit": "ns/iter",
            "extra": "iterations: 418379\ncpu: 1673.289883096552 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2742.9011146841967,
            "unit": "ns/iter",
            "extra": "iterations: 258097\ncpu: 2744.5941060918703 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4938.277020736957,
            "unit": "ns/iter",
            "extra": "iterations: 141715\ncpu: 4939.474494584528 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9232.81613014247,
            "unit": "ns/iter",
            "extra": "iterations: 75858\ncpu: 9232.398758205782 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17842.901653278204,
            "unit": "ns/iter",
            "extra": "iterations: 38771\ncpu: 17843.38913105079 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35042.66531386247,
            "unit": "ns/iter",
            "extra": "iterations: 19959\ncpu: 35043.01673430313 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69475.22594106018,
            "unit": "ns/iter",
            "extra": "iterations: 10069\ncpu: 69470.13248584313 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138364.97888718694,
            "unit": "ns/iter",
            "extra": "iterations: 5068\ncpu: 138347.56787687461 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 278756.5468315079,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 278751.39537664095 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 550778.296063056,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 550780.6708661265 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.329265126985277,
            "unit": "ns/iter",
            "extra": "iterations: 27616921\ncpu: 25.327614001575352 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 32.6455532501294,
            "unit": "ns/iter",
            "extra": "iterations: 21614708\ncpu: 32.643918252330835 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.47369679726597,
            "unit": "ns/iter",
            "extra": "iterations: 15408865\ncpu: 45.47050824314452 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 72.32331326059666,
            "unit": "ns/iter",
            "extra": "iterations: 9777607\ncpu: 72.3205985881822 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 116.96338762688205,
            "unit": "ns/iter",
            "extra": "iterations: 5975357\ncpu: 116.95546391621467 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 206.30011428820958,
            "unit": "ns/iter",
            "extra": "iterations: 3392301\ncpu: 206.29082413382557 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 385.4716423643652,
            "unit": "ns/iter",
            "extra": "iterations: 1817112\ncpu: 385.44230240073324 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 768.9349593582966,
            "unit": "ns/iter",
            "extra": "iterations: 934262\ncpu: 768.9076458209796 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1462.8813920202383,
            "unit": "ns/iter",
            "extra": "iterations: 478585\ncpu: 1462.7911927870723 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2892.021828396733,
            "unit": "ns/iter",
            "extra": "iterations: 242070\ncpu: 2891.8745817325575 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5756.928920421487,
            "unit": "ns/iter",
            "extra": "iterations: 121779\ncpu: 5756.753142988524 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 204.34845997847452,
            "unit": "ns/iter",
            "extra": "iterations: 3425082\ncpu: 204.32584971688226 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 412.0707865386929,
            "unit": "ns/iter",
            "extra": "iterations: 1698289\ncpu: 412.05477807369596 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 820.7726873370246,
            "unit": "ns/iter",
            "extra": "iterations: 854783\ncpu: 820.7014645822401 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1580.1109233168381,
            "unit": "ns/iter",
            "extra": "iterations: 443748\ncpu: 1580.0209646015335 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3116.203834884188,
            "unit": "ns/iter",
            "extra": "iterations: 221493\ncpu: 3115.8410784990906 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6181.185365680776,
            "unit": "ns/iter",
            "extra": "iterations: 112858\ncpu: 6180.672074642476 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12324.049791362228,
            "unit": "ns/iter",
            "extra": "iterations: 56797\ncpu: 12323.306248569505 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24629.538096576933,
            "unit": "ns/iter",
            "extra": "iterations: 28454\ncpu: 24627.795951360033 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49505.52638605835,
            "unit": "ns/iter",
            "extra": "iterations: 14231\ncpu: 49466.55842878219 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98337.68717516544,
            "unit": "ns/iter",
            "extra": "iterations: 7119\ncpu: 98332.89535047072 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196563.54854096804,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 196549.77356902408 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.479742387794392,
            "unit": "ns/iter",
            "extra": "iterations: 26464274\ncpu: 26.478614867726886 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.64557535163318,
            "unit": "ns/iter",
            "extra": "iterations: 27320171\ncpu: 25.644376091203817 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 27.64721660307171,
            "unit": "ns/iter",
            "extra": "iterations: 25345864\ncpu: 27.645747527091473 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 33.20919212648728,
            "unit": "ns/iter",
            "extra": "iterations: 21116115\ncpu: 33.20729627585388 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 42.8245651614825,
            "unit": "ns/iter",
            "extra": "iterations: 16358199\ncpu: 42.822206955668136 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 64.568976215136,
            "unit": "ns/iter",
            "extra": "iterations: 10928673\ncpu: 64.56781532396452 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 96.72426304400125,
            "unit": "ns/iter",
            "extra": "iterations: 7236219\ncpu: 96.71961351639645 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 159.7774191958118,
            "unit": "ns/iter",
            "extra": "iterations: 4381456\ncpu: 159.7710847718193 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 503.1767129596115,
            "unit": "ns/iter",
            "extra": "iterations: 1396253\ncpu: 503.12958682989034 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 540.2663456446683,
            "unit": "ns/iter",
            "extra": "iterations: 1276548\ncpu: 540.2444733766364 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1030.4804638169223,
            "unit": "ns/iter",
            "extra": "iterations: 679406\ncpu: 1030.3870410329012 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 630.2468452089719,
            "unit": "ns/iter",
            "extra": "iterations: 1114415\ncpu: 628.5236630879409 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 630.9285249964349,
            "unit": "ns/iter",
            "extra": "iterations: 1109143\ncpu: 631.1618745270507 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 631.2431581110895,
            "unit": "ns/iter",
            "extra": "iterations: 1107954\ncpu: 631.4118555491796 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 679.0822885918493,
            "unit": "ns/iter",
            "extra": "iterations: 1024735\ncpu: 684.2676340725403 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 681.1741340675017,
            "unit": "ns/iter",
            "extra": "iterations: 1019565\ncpu: 686.0270791976509 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 692.9161526389668,
            "unit": "ns/iter",
            "extra": "iterations: 1004170\ncpu: 698.2812840468134 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 685.2904374101597,
            "unit": "ns/iter",
            "extra": "iterations: 1012163\ncpu: 690.2959019454357 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 686.8910137567875,
            "unit": "ns/iter",
            "extra": "iterations: 1007017\ncpu: 692.3539940240602 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 743.1329088616592,
            "unit": "ns/iter",
            "extra": "iterations: 936386\ncpu: 747.7474300081286 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 770.5099111666593,
            "unit": "ns/iter",
            "extra": "iterations: 901912\ncpu: 776.4093193105833 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 806.5541762038795,
            "unit": "ns/iter",
            "extra": "iterations: 860636\ncpu: 813.578403641705 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 617.7547153551217,
            "unit": "ns/iter",
            "extra": "iterations: 1130670\ncpu: 619.4106512080594 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 639.5666612142825,
            "unit": "ns/iter",
            "extra": "iterations: 1101960\ncpu: 640.9610702757186 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 637.8546133207542,
            "unit": "ns/iter",
            "extra": "iterations: 1092349\ncpu: 639.5765254497796 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 650.0148739204395,
            "unit": "ns/iter",
            "extra": "iterations: 1058700\ncpu: 651.8649844238867 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 674.0326397420424,
            "unit": "ns/iter",
            "extra": "iterations: 1033311\ncpu: 675.8072680904964 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 705.9011858974211,
            "unit": "ns/iter",
            "extra": "iterations: 988280\ncpu: 707.5241551077462 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 769.5676150163341,
            "unit": "ns/iter",
            "extra": "iterations: 910397\ncpu: 771.3329108012828 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 903.4470094995924,
            "unit": "ns/iter",
            "extra": "iterations: 773431\ncpu: 905.1928653035276 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1362.5786286032699,
            "unit": "ns/iter",
            "extra": "iterations: 512994\ncpu: 1364.3695170084088 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1852.499359630945,
            "unit": "ns/iter",
            "extra": "iterations: 377131\ncpu: 1854.220607702498 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2838.173912344466,
            "unit": "ns/iter",
            "extra": "iterations: 246653\ncpu: 2840.0129899049316 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 663.0450588560199,
            "unit": "ns/iter",
            "extra": "iterations: 1043302\ncpu: 671.3509913799517 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8ba0853f8b20ccb906d3c2268e310550c6ec9e39",
          "message": "test(doctest): allow non-copyable GENERATE values (#84)\n\nUpdate the doctest GENERATE helper to support non-copyable value types by replacing an std::optional-based storage with a pointer to the selected element. The generator now iterates with a non-const reference, stores the element address, checks for an empty range via nullptr, and returns either a copy (when copy-constructible) or a moved value otherwise. Also remove the unused optional include.\n\nThis fixes failures when tests use GENERATE with types that are not copy-constructible and keeps the empty-range error handling intact.",
          "timestamp": "2025-11-10T03:23:54Z",
          "url": "https://github.com/3uclid3/ant/commit/8ba0853f8b20ccb906d3c2268e310550c6ec9e39"
        },
        "date": 1762745379633,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 787.1804206586908,
            "unit": "ns/iter",
            "extra": "iterations: 886506\ncpu: 789.7013759636783 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1301.33928469484,
            "unit": "ns/iter",
            "extra": "iterations: 536629\ncpu: 1303.72135684045 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2332.425247438925,
            "unit": "ns/iter",
            "extra": "iterations: 300973\ncpu: 2334.7074156153685 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 3862.834860667656,
            "unit": "ns/iter",
            "extra": "iterations: 181035\ncpu: 3865.397094484747 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 7461.497424109727,
            "unit": "ns/iter",
            "extra": "iterations: 93755\ncpu: 7463.474844009104 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 14583.743613153989,
            "unit": "ns/iter",
            "extra": "iterations: 43840\ncpu: 14585.251916056191 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 28953.362121065173,
            "unit": "ns/iter",
            "extra": "iterations: 24177\ncpu: 28955.53559167789 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 57471.54076513341,
            "unit": "ns/iter",
            "extra": "iterations: 12155\ncpu: 57472.94866310223 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 114808.23154087718,
            "unit": "ns/iter",
            "extra": "iterations: 6081\ncpu: 114823.50583786951 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 230255.40506750948,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 230262.1625534542 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 461956.7433863851,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 461973.6428571379 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 18.14050539745031,
            "unit": "ns/iter",
            "extra": "iterations: 38587571\ncpu: 18.13911953670265 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 23.619159881783265,
            "unit": "ns/iter",
            "extra": "iterations: 29643471\ncpu: 23.618587243039087 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 33.41090265070233,
            "unit": "ns/iter",
            "extra": "iterations: 20975046\ncpu: 33.40784406384613 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 57.58949732946386,
            "unit": "ns/iter",
            "extra": "iterations: 12125278\ncpu: 57.58779815192679 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 101.5681349453795,
            "unit": "ns/iter",
            "extra": "iterations: 6927840\ncpu: 101.56169816277503 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 198.46963656414368,
            "unit": "ns/iter",
            "extra": "iterations: 3579091\ncpu: 198.460001156718 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 356.85845390918286,
            "unit": "ns/iter",
            "extra": "iterations: 1965706\ncpu: 356.82216567482607 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 664.9532568571503,
            "unit": "ns/iter",
            "extra": "iterations: 1062466\ncpu: 664.9096300493361 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1273.1485670876907,
            "unit": "ns/iter",
            "extra": "iterations: 551569\ncpu: 1273.092291263646 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2451.5333468768617,
            "unit": "ns/iter",
            "extra": "iterations: 285499\ncpu: 2451.3644636233435 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 4817.7057330536245,
            "unit": "ns/iter",
            "extra": "iterations: 145385\ncpu: 4817.229129552557 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 218.48446452252549,
            "unit": "ns/iter",
            "extra": "iterations: 3255291\ncpu: 218.47009898654215 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 582.0790586194403,
            "unit": "ns/iter",
            "extra": "iterations: 1208268\ncpu: 582.0549530402194 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 1225.2518200402753,
            "unit": "ns/iter",
            "extra": "iterations: 587487\ncpu: 1225.1414482363027 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 2443.867352278923,
            "unit": "ns/iter",
            "extra": "iterations: 290446\ncpu: 2443.7363296447515 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 5036.4948699998995,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5036.104990000005 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 9587.88680821441,
            "unit": "ns/iter",
            "extra": "iterations: 71825\ncpu: 9586.993080403763 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 19138.205289357178,
            "unit": "ns/iter",
            "extra": "iterations: 35959\ncpu: 19137.191495870247 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 37244.93504620433,
            "unit": "ns/iter",
            "extra": "iterations: 18721\ncpu: 37243.26077666802 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 74797.4714758163,
            "unit": "ns/iter",
            "extra": "iterations: 9676\ncpu: 74792.9075031005 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 149701.27647445694,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 149690.1806621354 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 293125.75898973166,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 293112.88613013754 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 23.13918328502472,
            "unit": "ns/iter",
            "extra": "iterations: 30012943\ncpu: 23.137532697143385 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 21.099068891698135,
            "unit": "ns/iter",
            "extra": "iterations: 33035577\ncpu: 21.098735100040866 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 23.34205811505408,
            "unit": "ns/iter",
            "extra": "iterations: 29449753\ncpu: 23.340447371494076 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 28.08449788472872,
            "unit": "ns/iter",
            "extra": "iterations: 24854492\ncpu: 28.08355503705329 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 37.538669905316915,
            "unit": "ns/iter",
            "extra": "iterations: 18675272\ncpu: 37.535802852028105 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 55.85825802972157,
            "unit": "ns/iter",
            "extra": "iterations: 12448938\ncpu: 55.858232887013955 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 95.90511125158679,
            "unit": "ns/iter",
            "extra": "iterations: 7305334\ncpu: 95.8970053935936 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 178.16685725971186,
            "unit": "ns/iter",
            "extra": "iterations: 3931588\ncpu: 178.16022431648622 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 358.3932320838583,
            "unit": "ns/iter",
            "extra": "iterations: 1939829\ncpu: 358.3574562500104 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 691.6811547814723,
            "unit": "ns/iter",
            "extra": "iterations: 1009126\ncpu: 691.6209908376205 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1357.3049904142183,
            "unit": "ns/iter",
            "extra": "iterations: 516390\ncpu: 1357.2167450957693 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 270.82999445303614,
            "unit": "ns/iter",
            "extra": "iterations: 2567981\ncpu: 272.4916231851634 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 271.5955737569587,
            "unit": "ns/iter",
            "extra": "iterations: 2562942\ncpu: 273.29403474587457 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 271.47535788453376,
            "unit": "ns/iter",
            "extra": "iterations: 2559440\ncpu: 273.260651550091 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 302.34424813089225,
            "unit": "ns/iter",
            "extra": "iterations: 2292544\ncpu: 305.15213492155345 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 304.48895980344423,
            "unit": "ns/iter",
            "extra": "iterations: 2282296\ncpu: 307.4618765464667 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 304.54717408427354,
            "unit": "ns/iter",
            "extra": "iterations: 2275413\ncpu: 307.3484949781772 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 307.2363373670925,
            "unit": "ns/iter",
            "extra": "iterations: 2256211\ncpu: 310.1049361046405 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 311.3782111037013,
            "unit": "ns/iter",
            "extra": "iterations: 2229871\ncpu: 314.14031618746594 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 363.1167065573072,
            "unit": "ns/iter",
            "extra": "iterations: 1912600\ncpu: 365.9735700090726 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 369.99540530364897,
            "unit": "ns/iter",
            "extra": "iterations: 1877169\ncpu: 372.3991936800444 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 373.87072268033637,
            "unit": "ns/iter",
            "extra": "iterations: 1855399\ncpu: 376.38213990873123 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 262.5583229580402,
            "unit": "ns/iter",
            "extra": "iterations: 2640341\ncpu: 265.18375959715127 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 278.7707690073254,
            "unit": "ns/iter",
            "extra": "iterations: 2494139\ncpu: 280.7474150334737 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 283.9155393844429,
            "unit": "ns/iter",
            "extra": "iterations: 2446146\ncpu: 286.1367751513089 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 293.73180180024286,
            "unit": "ns/iter",
            "extra": "iterations: 2373517\ncpu: 299.6646196364207 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 309.32415391046067,
            "unit": "ns/iter",
            "extra": "iterations: 2244878\ncpu: 311.53461123752595 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 348.40797151939796,
            "unit": "ns/iter",
            "extra": "iterations: 1996284\ncpu: 350.5947856144508 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 430.4467721590138,
            "unit": "ns/iter",
            "extra": "iterations: 1618082\ncpu: 432.6850691067438 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 613.0477262063349,
            "unit": "ns/iter",
            "extra": "iterations: 1137740\ncpu: 615.1765412210798 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 946.7896396936454,
            "unit": "ns/iter",
            "extra": "iterations: 738490\ncpu: 948.9248981008922 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1588.0893065264634,
            "unit": "ns/iter",
            "extra": "iterations: 435377\ncpu: 1590.3432795078295 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2903.13805280854,
            "unit": "ns/iter",
            "extra": "iterations: 247543\ncpu: 2906.056786084313 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 304.7810896337355,
            "unit": "ns/iter",
            "extra": "iterations: 2249304\ncpu: 308.25417194962273 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4e7c70e1b2d76e9fd4070c36d93c3d4261036336",
          "message": "feat(database): add schema::bitset_for and tests (#88)\n\nAdds a convenience API to produce a dynamic bitset representing a set of component types for a schema. The new templated function constructs and returns a bitset with bits set for the provided component types, simplifying creation of component masks.\n\nAlso adds unit tests that validate component metadata stored by the schema builder and verify the new bitset creation behavior. Includes necessary header import for dynamic_bitset.\n\nThis improves ergonomics when working with component presence masks and centralizes the logic for constructing those bitsets in the schema type.",
          "timestamp": "2025-11-10T07:25:27Z",
          "url": "https://github.com/3uclid3/ant/commit/4e7c70e1b2d76e9fd4070c36d93c3d4261036336"
        },
        "date": 1762831537843,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1153.831603580683,
            "unit": "ns/iter",
            "extra": "iterations: 605096\ncpu: 1154.9626803018348 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1670.179048251717,
            "unit": "ns/iter",
            "extra": "iterations: 418781\ncpu: 1671.542880407883 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2705.2162328207046,
            "unit": "ns/iter",
            "extra": "iterations: 258735\ncpu: 2707.347328347812 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4958.9783390420625,
            "unit": "ns/iter",
            "extra": "iterations: 141868\ncpu: 4960.345610003419 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9238.876099770738,
            "unit": "ns/iter",
            "extra": "iterations: 75811\ncpu: 9240.2655683215 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17840.420186943677,
            "unit": "ns/iter",
            "extra": "iterations: 39154\ncpu: 17839.898401184728 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35036.21729901234,
            "unit": "ns/iter",
            "extra": "iterations: 19793\ncpu: 35034.60349618925 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69445.91576649823,
            "unit": "ns/iter",
            "extra": "iterations: 10091\ncpu: 69434.0933505076 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 179159.32500658903,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 179158.43960855482 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275860.7744095283,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 275864.9543307088 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 551039.9409913453,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 550959.8560188852 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.32037557111969,
            "unit": "ns/iter",
            "extra": "iterations: 27712887\ncpu: 25.317044774151448 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.741382480731527,
            "unit": "ns/iter",
            "extra": "iterations: 22079324\ncpu: 31.73854240283809 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.725088136025946,
            "unit": "ns/iter",
            "extra": "iterations: 15219656\ncpu: 45.720684882759535 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 70.12452274441944,
            "unit": "ns/iter",
            "extra": "iterations: 9954310\ncpu: 70.11727432639718 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 114.78290344164428,
            "unit": "ns/iter",
            "extra": "iterations: 6109756\ncpu: 114.76901303423597 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.7681766740574,
            "unit": "ns/iter",
            "extra": "iterations: 3413427\ncpu: 204.73638985102113 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 387.93893022879377,
            "unit": "ns/iter",
            "extra": "iterations: 1828204\ncpu: 387.8819880057149 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 744.3492816474281,
            "unit": "ns/iter",
            "extra": "iterations: 935961\ncpu: 744.2659736890763 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1456.7494630028016,
            "unit": "ns/iter",
            "extra": "iterations: 480915\ncpu: 1456.651587078795 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2884.2928134902913,
            "unit": "ns/iter",
            "extra": "iterations: 242663\ncpu: 2883.999868129874 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5740.469840098435,
            "unit": "ns/iter",
            "extra": "iterations: 121950\ncpu: 5739.912849528474 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 207.26645001385052,
            "unit": "ns/iter",
            "extra": "iterations: 3429450\ncpu: 207.24882590502878 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 411.5957348555072,
            "unit": "ns/iter",
            "extra": "iterations: 1704233\ncpu: 411.5876268092466 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 820.9801863232705,
            "unit": "ns/iter",
            "extra": "iterations: 854107\ncpu: 820.951425289804 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1580.0018402500548,
            "unit": "ns/iter",
            "extra": "iterations: 443418\ncpu: 1579.9034522730212 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3115.0434977977493,
            "unit": "ns/iter",
            "extra": "iterations: 224770\ncpu: 3114.9490768340934 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6182.048053162942,
            "unit": "ns/iter",
            "extra": "iterations: 113312\ncpu: 6181.469482490821 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12320.71504618204,
            "unit": "ns/iter",
            "extra": "iterations: 56732\ncpu: 12320.035958541954 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24599.766731209238,
            "unit": "ns/iter",
            "extra": "iterations: 28405\ncpu: 24596.91005104732 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49202.0700091286,
            "unit": "ns/iter",
            "extra": "iterations: 14241\ncpu: 49199.25314233572 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98293.02851123681,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 98277.2428370787 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 197779.36163610755,
            "unit": "ns/iter",
            "extra": "iterations: 3545\ncpu: 197766.81777150894 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 28.135487782412262,
            "unit": "ns/iter",
            "extra": "iterations: 24807270\ncpu: 28.1322217237124 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.52985730384826,
            "unit": "ns/iter",
            "extra": "iterations: 26460209\ncpu: 26.52841328653142 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 31.561483883252006,
            "unit": "ns/iter",
            "extra": "iterations: 22367447\ncpu: 31.557070281646357 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 38.15489294097762,
            "unit": "ns/iter",
            "extra": "iterations: 18415029\ncpu: 38.15163793660068 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 46.58472369824917,
            "unit": "ns/iter",
            "extra": "iterations: 15025312\ncpu: 46.57952294102151 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 69.40970662663923,
            "unit": "ns/iter",
            "extra": "iterations: 10182281\ncpu: 69.2613470400198 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 100.75822939359405,
            "unit": "ns/iter",
            "extra": "iterations: 6944649\ncpu: 100.7454154990409 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 163.83773663480463,
            "unit": "ns/iter",
            "extra": "iterations: 4279062\ncpu: 163.82366626143758 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.6184383973811,
            "unit": "ns/iter",
            "extra": "iterations: 2363828\ncpu: 296.5889117143884 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 542.1479438722364,
            "unit": "ns/iter",
            "extra": "iterations: 1292551\ncpu: 542.102038526913 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1029.8266102592477,
            "unit": "ns/iter",
            "extra": "iterations: 681707\ncpu: 1029.763275131402 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 629.5057850854733,
            "unit": "ns/iter",
            "extra": "iterations: 1110183\ncpu: 630.0740715730448 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 629.9762300956442,
            "unit": "ns/iter",
            "extra": "iterations: 1109933\ncpu: 630.6297145910431 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 630.542604690725,
            "unit": "ns/iter",
            "extra": "iterations: 1108481\ncpu: 630.7384925846167 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 680.4419245279015,
            "unit": "ns/iter",
            "extra": "iterations: 1020405\ncpu: 686.8087925907487 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 684.2555700669219,
            "unit": "ns/iter",
            "extra": "iterations: 1009817\ncpu: 690.6539056053562 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 684.8739626464388,
            "unit": "ns/iter",
            "extra": "iterations: 1014350\ncpu: 691.0617025727632 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 687.4060252767162,
            "unit": "ns/iter",
            "extra": "iterations: 1007292\ncpu: 694.1039102835322 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 694.5325001511084,
            "unit": "ns/iter",
            "extra": "iterations: 998980\ncpu: 700.8317253557339 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 742.286319874335,
            "unit": "ns/iter",
            "extra": "iterations: 935583\ncpu: 748.3274589224579 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 774.0642395007267,
            "unit": "ns/iter",
            "extra": "iterations: 895695\ncpu: 780.7041001728127 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 810.55138768687,
            "unit": "ns/iter",
            "extra": "iterations: 855380\ncpu: 818.4077602961986 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 616.591089547855,
            "unit": "ns/iter",
            "extra": "iterations: 1132221\ncpu: 618.2814070770103 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 634.4146152436654,
            "unit": "ns/iter",
            "extra": "iterations: 1102439\ncpu: 636.2895216870127 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 637.2937130536143,
            "unit": "ns/iter",
            "extra": "iterations: 1094953\ncpu: 639.2808010980694 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 652.6000325207526,
            "unit": "ns/iter",
            "extra": "iterations: 1070242\ncpu: 654.5609572354881 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 673.2987300144767,
            "unit": "ns/iter",
            "extra": "iterations: 1036548\ncpu: 675.0678164518259 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 705.2953312264069,
            "unit": "ns/iter",
            "extra": "iterations: 991138\ncpu: 707.2493789890542 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 770.67105712284,
            "unit": "ns/iter",
            "extra": "iterations: 903324\ncpu: 772.5857211890083 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 907.4020923084078,
            "unit": "ns/iter",
            "extra": "iterations: 771400\ncpu: 909.2293505205859 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1153.389412078446,
            "unit": "ns/iter",
            "extra": "iterations: 606653\ncpu: 1155.2030781984358 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1645.717648858225,
            "unit": "ns/iter",
            "extra": "iterations: 425155\ncpu: 1647.2039256179003 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 3508.5289095371313,
            "unit": "ns/iter",
            "extra": "iterations: 199588\ncpu: 3510.826868361771 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 661.333067665514,
            "unit": "ns/iter",
            "extra": "iterations: 1052732\ncpu: 663.919021176555 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4e7c70e1b2d76e9fd4070c36d93c3d4261036336",
          "message": "feat(database): add schema::bitset_for and tests (#88)\n\nAdds a convenience API to produce a dynamic bitset representing a set of component types for a schema. The new templated function constructs and returns a bitset with bits set for the provided component types, simplifying creation of component masks.\n\nAlso adds unit tests that validate component metadata stored by the schema builder and verify the new bitset creation behavior. Includes necessary header import for dynamic_bitset.\n\nThis improves ergonomics when working with component presence masks and centralizes the logic for constructing those bitsets in the schema type.",
          "timestamp": "2025-11-10T07:25:27Z",
          "url": "https://github.com/3uclid3/ant/commit/4e7c70e1b2d76e9fd4070c36d93c3d4261036336"
        },
        "date": 1762917894321,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1154.584771682552,
            "unit": "ns/iter",
            "extra": "iterations: 606541\ncpu: 1155.8820211659504 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1670.8083277011237,
            "unit": "ns/iter",
            "extra": "iterations: 418939\ncpu: 1672.4222524041495 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2706.2846226415863,
            "unit": "ns/iter",
            "extra": "iterations: 258588\ncpu: 2707.0694077060707 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4933.921460037863,
            "unit": "ns/iter",
            "extra": "iterations: 141724\ncpu: 4936.173160509073 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9326.703880758574,
            "unit": "ns/iter",
            "extra": "iterations: 75733\ncpu: 9327.1210964837 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17856.12382045868,
            "unit": "ns/iter",
            "extra": "iterations: 39210\ncpu: 17855.18362662507 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35162.24593204386,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 35162.38156511597 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69559.51085785191,
            "unit": "ns/iter",
            "extra": "iterations: 10085\ncpu: 69542.2795240566 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138231.3666667497,
            "unit": "ns/iter",
            "extra": "iterations: 5070\ncpu: 138197.1554240722 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275915.7602362226,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 275867.16496063117 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 551147.4222573934,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 551045.9250197236 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.301277607489094,
            "unit": "ns/iter",
            "extra": "iterations: 27693482\ncpu: 25.29518447698268 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 32.17581080030805,
            "unit": "ns/iter",
            "extra": "iterations: 21821896\ncpu: 32.167490487536035 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.328123323780275,
            "unit": "ns/iter",
            "extra": "iterations: 15445845\ncpu: 45.326009745662944 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 69.79042787780449,
            "unit": "ns/iter",
            "extra": "iterations: 10024778\ncpu: 69.78336617529091 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 115.7120781392059,
            "unit": "ns/iter",
            "extra": "iterations: 6070397\ncpu: 115.70406630736021 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 205.27251185317425,
            "unit": "ns/iter",
            "extra": "iterations: 3431781\ncpu: 205.26312401636372 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 383.5005107101541,
            "unit": "ns/iter",
            "extra": "iterations: 1829805\ncpu: 383.46402212257635 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 750.3816706744857,
            "unit": "ns/iter",
            "extra": "iterations: 938998\ncpu: 750.2576917096733 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1457.5250814549677,
            "unit": "ns/iter",
            "extra": "iterations: 479099\ncpu: 1457.3476170895788 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2884.9461888594547,
            "unit": "ns/iter",
            "extra": "iterations: 242106\ncpu: 2884.625891138592 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5747.669532716433,
            "unit": "ns/iter",
            "extra": "iterations: 122003\ncpu: 5747.057687106066 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 204.64964344485387,
            "unit": "ns/iter",
            "extra": "iterations: 3431587\ncpu: 204.63469904740913 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 409.95069655449333,
            "unit": "ns/iter",
            "extra": "iterations: 1709414\ncpu: 409.90854234258165 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 818.8107364565586,
            "unit": "ns/iter",
            "extra": "iterations: 854565\ncpu: 818.7325188838768 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1570.9415418858773,
            "unit": "ns/iter",
            "extra": "iterations: 444780\ncpu: 1570.713570754078 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3107.7579336875306,
            "unit": "ns/iter",
            "extra": "iterations: 225116\ncpu: 3107.3914381918676 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6179.185058688637,
            "unit": "ns/iter",
            "extra": "iterations: 113310\ncpu: 6178.4452563762925 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12316.614471393188,
            "unit": "ns/iter",
            "extra": "iterations: 56857\ncpu: 12315.200045728743 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24594.013498787004,
            "unit": "ns/iter",
            "extra": "iterations: 28447\ncpu: 24592.04246493485 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49192.85077982339,
            "unit": "ns/iter",
            "extra": "iterations: 14234\ncpu: 49187.50084305191 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98355.56491228154,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 98346.44140350864 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196628.32667978556,
            "unit": "ns/iter",
            "extra": "iterations: 3557\ncpu: 196598.34748383446 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.312524537052663,
            "unit": "ns/iter",
            "extra": "iterations: 25690738\ncpu: 27.310599212837023 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.210220576386323,
            "unit": "ns/iter",
            "extra": "iterations: 26752229\ncpu: 26.207246132649555 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 27.90881758908077,
            "unit": "ns/iter",
            "extra": "iterations: 24990686\ncpu: 27.906731411854697 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 37.905522662814995,
            "unit": "ns/iter",
            "extra": "iterations: 18537525\ncpu: 37.90176790051509 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 46.68877031027037,
            "unit": "ns/iter",
            "extra": "iterations: 15006078\ncpu: 46.683443868544444 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 68.54971848277377,
            "unit": "ns/iter",
            "extra": "iterations: 10250172\ncpu: 68.54008449809463 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 100.08703443714758,
            "unit": "ns/iter",
            "extra": "iterations: 6982489\ncpu: 100.07931412423211 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 162.99966675905378,
            "unit": "ns/iter",
            "extra": "iterations: 4297191\ncpu: 162.98034460185792 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.4343943247348,
            "unit": "ns/iter",
            "extra": "iterations: 2359994\ncpu: 296.4186955560063 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 763.0198818769146,
            "unit": "ns/iter",
            "extra": "iterations: 919380\ncpu: 762.9537416519873 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1030.4602416160967,
            "unit": "ns/iter",
            "extra": "iterations: 679756\ncpu: 1030.3807733951517 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 628.7605046614534,
            "unit": "ns/iter",
            "extra": "iterations: 1113888\ncpu: 628.1524345347732 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 628.004131946617,
            "unit": "ns/iter",
            "extra": "iterations: 1113761\ncpu: 627.3978196401972 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 628.3358626738036,
            "unit": "ns/iter",
            "extra": "iterations: 1111886\ncpu: 628.1656554735343 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 682.0297474482174,
            "unit": "ns/iter",
            "extra": "iterations: 1023718\ncpu: 684.197862109164 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 683.6988623423181,
            "unit": "ns/iter",
            "extra": "iterations: 1016658\ncpu: 683.295712025813 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 680.605547413563,
            "unit": "ns/iter",
            "extra": "iterations: 1028154\ncpu: 680.8178288486446 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 684.128924864516,
            "unit": "ns/iter",
            "extra": "iterations: 1023697\ncpu: 684.0625986010394 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 685.1573620288108,
            "unit": "ns/iter",
            "extra": "iterations: 1020996\ncpu: 685.618814365668 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 734.1577866122037,
            "unit": "ns/iter",
            "extra": "iterations: 955512\ncpu: 733.6088296123296 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 768.5454945789382,
            "unit": "ns/iter",
            "extra": "iterations: 915043\ncpu: 769.6189993262002 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 796.331592555711,
            "unit": "ns/iter",
            "extra": "iterations: 872981\ncpu: 800.6322417144123 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 616.6258356534945,
            "unit": "ns/iter",
            "extra": "iterations: 1113043\ncpu: 618.4395571388301 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 634.8274022481733,
            "unit": "ns/iter",
            "extra": "iterations: 1101764\ncpu: 636.2211989132077 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 638.2801882304667,
            "unit": "ns/iter",
            "extra": "iterations: 1093497\ncpu: 639.9884828226806 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 651.5724237624416,
            "unit": "ns/iter",
            "extra": "iterations: 1070712\ncpu: 653.3545762116152 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 677.7956225283458,
            "unit": "ns/iter",
            "extra": "iterations: 1028582\ncpu: 679.194578547984 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 711.2682857976631,
            "unit": "ns/iter",
            "extra": "iterations: 983563\ncpu: 712.855901451133 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 771.1705330911828,
            "unit": "ns/iter",
            "extra": "iterations: 906563\ncpu: 772.8677400252066 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 905.6141936823248,
            "unit": "ns/iter",
            "extra": "iterations: 772880\ncpu: 907.0431334803202 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1357.208604604599,
            "unit": "ns/iter",
            "extra": "iterations: 515957\ncpu: 1358.602961104242 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1853.073621297396,
            "unit": "ns/iter",
            "extra": "iterations: 377934\ncpu: 1854.6274217205316 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2837.914872429385,
            "unit": "ns/iter",
            "extra": "iterations: 246712\ncpu: 2839.4378587096103 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 665.2941122761366,
            "unit": "ns/iter",
            "extra": "iterations: 1047175\ncpu: 669.4488829415411 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "853d7dfceaba69ce16ca34e9da77ec286a38360f",
          "message": "chore(ci): disable failing on benchmark alert (#91)\n\nPrevents the nightly workflow from failing when the alert threshold is exceeded by setting fail-on-alert to false.",
          "timestamp": "2025-11-13T00:18:20Z",
          "url": "https://github.com/3uclid3/ant/commit/853d7dfceaba69ce16ca34e9da77ec286a38360f"
        },
        "date": 1762993346807,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1154.4075565848657,
            "unit": "ns/iter",
            "extra": "iterations: 605538\ncpu: 1155.7904309885764 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1671.6520284163967,
            "unit": "ns/iter",
            "extra": "iterations: 418606\ncpu: 1672.9382426435334 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2707.0686431710587,
            "unit": "ns/iter",
            "extra": "iterations: 258234\ncpu: 2707.690304142814 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4940.289692798188,
            "unit": "ns/iter",
            "extra": "iterations: 141726\ncpu: 4940.4791851886075 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9354.59013404963,
            "unit": "ns/iter",
            "extra": "iterations: 75776\ncpu: 9354.216770480412 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17855.963031823,
            "unit": "ns/iter",
            "extra": "iterations: 39250\ncpu: 17855.701885349135 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35039.924428504135,
            "unit": "ns/iter",
            "extra": "iterations: 19862\ncpu: 35036.51525526367 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69460.26246146194,
            "unit": "ns/iter",
            "extra": "iterations: 10051\ncpu: 69456.04895035322 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138282.84551229188,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 138286.74066718612 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275952.7350392816,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 275952.78543308243 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 551183.1572329138,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 551120.0243710711 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.30088789371478,
            "unit": "ns/iter",
            "extra": "iterations: 27669528\ncpu: 25.29479664416398 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.86023325760404,
            "unit": "ns/iter",
            "extra": "iterations: 22116921\ncpu: 31.852449940929805 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.189085485243304,
            "unit": "ns/iter",
            "extra": "iterations: 15520012\ncpu: 45.18590945677106 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 69.74237203723615,
            "unit": "ns/iter",
            "extra": "iterations: 10055601\ncpu: 69.73365908213745 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 114.1837602107582,
            "unit": "ns/iter",
            "extra": "iterations: 6125646\ncpu: 114.16923113088805 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.07868268735206,
            "unit": "ns/iter",
            "extra": "iterations: 3418414\ncpu: 204.05672338107703 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 382.49917107911034,
            "unit": "ns/iter",
            "extra": "iterations: 1829487\ncpu: 382.4462491397871 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 753.4847781039048,
            "unit": "ns/iter",
            "extra": "iterations: 938615\ncpu: 753.3690884974139 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1461.292330397622,
            "unit": "ns/iter",
            "extra": "iterations: 479047\ncpu: 1461.0968026101796 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2890.9972966726377,
            "unit": "ns/iter",
            "extra": "iterations: 242294\ncpu: 2890.724450461016 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5949.182748117898,
            "unit": "ns/iter",
            "extra": "iterations: 121807\ncpu: 5948.438866403405 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 206.91876223396218,
            "unit": "ns/iter",
            "extra": "iterations: 3388621\ncpu: 206.89803757929806 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 417.901097585528,
            "unit": "ns/iter",
            "extra": "iterations: 1678958\ncpu: 417.84486389772707 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 819.0171671110589,
            "unit": "ns/iter",
            "extra": "iterations: 855473\ncpu: 818.9813693710986 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1575.4713603039565,
            "unit": "ns/iter",
            "extra": "iterations: 444261\ncpu: 1575.378491472355 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3114.0524619747252,
            "unit": "ns/iter",
            "extra": "iterations: 224982\ncpu: 3113.912424105049 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6182.3853300862775,
            "unit": "ns/iter",
            "extra": "iterations: 113334\ncpu: 6181.95432968041 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12365.1394930225,
            "unit": "ns/iter",
            "extra": "iterations: 53888\ncpu: 12363.18150608668 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24611.49403274066,
            "unit": "ns/iter",
            "extra": "iterations: 28405\ncpu: 24608.12839288859 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49180.273640579246,
            "unit": "ns/iter",
            "extra": "iterations: 14234\ncpu: 49176.046578614616 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98377.76668544085,
            "unit": "ns/iter",
            "extra": "iterations: 7102\ncpu: 98367.0250633627 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196648.68979131425,
            "unit": "ns/iter",
            "extra": "iterations: 3546\ncpu: 196625.96644106088 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.010285891646085,
            "unit": "ns/iter",
            "extra": "iterations: 25916567\ncpu: 27.0069640782283 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.798185122394568,
            "unit": "ns/iter",
            "extra": "iterations: 27139461\ncpu: 25.794892168271375 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 27.757890137406864,
            "unit": "ns/iter",
            "extra": "iterations: 25325763\ncpu: 27.755535460076512 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 36.09664055433758,
            "unit": "ns/iter",
            "extra": "iterations: 19436540\ncpu: 36.093693373409096 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 45.21590613320928,
            "unit": "ns/iter",
            "extra": "iterations: 15487309\ncpu: 45.213326149817355 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 67.0199470780926,
            "unit": "ns/iter",
            "extra": "iterations: 10501889\ncpu: 66.8841673150419 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 98.57796630613751,
            "unit": "ns/iter",
            "extra": "iterations: 7096604\ncpu: 98.56830379714027 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 161.50763198289474,
            "unit": "ns/iter",
            "extra": "iterations: 4335505\ncpu: 161.49270154226673 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 297.05228135753754,
            "unit": "ns/iter",
            "extra": "iterations: 2359560\ncpu: 297.0290935598167 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 540.6825139877058,
            "unit": "ns/iter",
            "extra": "iterations: 1295424\ncpu: 540.6397403475572 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1029.0864861924963,
            "unit": "ns/iter",
            "extra": "iterations: 680282\ncpu: 1029.0248426387955 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 630.6083769160846,
            "unit": "ns/iter",
            "extra": "iterations: 1112294\ncpu: 630.0176769825373 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 631.0240015871722,
            "unit": "ns/iter",
            "extra": "iterations: 1112843\ncpu: 629.9881753276894 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 631.0838814221185,
            "unit": "ns/iter",
            "extra": "iterations: 1109793\ncpu: 630.3548085099544 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 676.4522811640121,
            "unit": "ns/iter",
            "extra": "iterations: 1025287\ncpu: 681.2268886666034 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 672.261828994898,
            "unit": "ns/iter",
            "extra": "iterations: 1038930\ncpu: 674.6243750779802 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 673.0737610552305,
            "unit": "ns/iter",
            "extra": "iterations: 1029256\ncpu: 675.2542516118353 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 674.9159312314857,
            "unit": "ns/iter",
            "extra": "iterations: 1033749\ncpu: 677.1659687194466 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 677.8301719416994,
            "unit": "ns/iter",
            "extra": "iterations: 1029294\ncpu: 679.8586293152096 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 734.3155399739385,
            "unit": "ns/iter",
            "extra": "iterations: 948612\ncpu: 736.94754441385 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 763.7594236339456,
            "unit": "ns/iter",
            "extra": "iterations: 915331\ncpu: 765.2995888903745 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 795.5485190439935,
            "unit": "ns/iter",
            "extra": "iterations: 876161\ncpu: 797.3668458162085 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 619.4547626588885,
            "unit": "ns/iter",
            "extra": "iterations: 1128393\ncpu: 620.7210528594752 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 634.3121552455341,
            "unit": "ns/iter",
            "extra": "iterations: 1100792\ncpu: 636.2714091302065 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 639.8109898931989,
            "unit": "ns/iter",
            "extra": "iterations: 1091423\ncpu: 641.4920337941717 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 651.6387791244975,
            "unit": "ns/iter",
            "extra": "iterations: 1073980\ncpu: 653.1003147141842 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 684.3623068320286,
            "unit": "ns/iter",
            "extra": "iterations: 1028664\ncpu: 685.806714337265 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 707.5654567268065,
            "unit": "ns/iter",
            "extra": "iterations: 989669\ncpu: 709.3127712355845 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 770.375251327567,
            "unit": "ns/iter",
            "extra": "iterations: 906739\ncpu: 772.1046883437903 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 905.1481031170125,
            "unit": "ns/iter",
            "extra": "iterations: 771935\ncpu: 906.9088316947726 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1154.3806734805776,
            "unit": "ns/iter",
            "extra": "iterations: 599322\ncpu: 1156.0084528972786 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1647.389439274184,
            "unit": "ns/iter",
            "extra": "iterations: 424554\ncpu: 1648.8894534143647 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2628.0500325398184,
            "unit": "ns/iter",
            "extra": "iterations: 265647\ncpu: 2629.621825192984 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 663.7262207628409,
            "unit": "ns/iter",
            "extra": "iterations: 1048111\ncpu: 666.661997635275 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "853d7dfceaba69ce16ca34e9da77ec286a38360f",
          "message": "chore(ci): disable failing on benchmark alert (#91)\n\nPrevents the nightly workflow from failing when the alert threshold is exceeded by setting fail-on-alert to false.",
          "timestamp": "2025-11-13T00:18:20Z",
          "url": "https://github.com/3uclid3/ant/commit/853d7dfceaba69ce16ca34e9da77ec286a38360f"
        },
        "date": 1763004374579,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1154.3772736018038,
            "unit": "ns/iter",
            "extra": "iterations: 605648\ncpu: 1155.5965940612007 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1696.1205163670677,
            "unit": "ns/iter",
            "extra": "iterations: 418773\ncpu: 1697.4300181721535 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2733.1392217576736,
            "unit": "ns/iter",
            "extra": "iterations: 257589\ncpu: 2732.841138402953 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4947.6937719311845,
            "unit": "ns/iter",
            "extra": "iterations: 141633\ncpu: 4945.112304335373 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9247.455780779386,
            "unit": "ns/iter",
            "extra": "iterations: 75725\ncpu: 9243.853799932434 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17847.288481667038,
            "unit": "ns/iter",
            "extra": "iterations: 39233\ncpu: 17842.166441516434 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35035.478082533664,
            "unit": "ns/iter",
            "extra": "iterations: 19984\ncpu: 35029.1620296228 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69608.19681063911,
            "unit": "ns/iter",
            "extra": "iterations: 10096\ncpu: 69601.91610539093 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138275.732491694,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 138281.1426316771 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 276091.6545883654,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 276093.43954311684 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 550856.9937104926,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550729.882861651 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.33045782699204,
            "unit": "ns/iter",
            "extra": "iterations: 27648348\ncpu: 25.322952170596224 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.67395153684423,
            "unit": "ns/iter",
            "extra": "iterations: 22089069\ncpu: 31.666935306327286 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.13990937399549,
            "unit": "ns/iter",
            "extra": "iterations: 15513428\ncpu: 45.138362391600424 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 69.58300710656796,
            "unit": "ns/iter",
            "extra": "iterations: 10075047\ncpu: 69.57489816176542 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 113.97865105150636,
            "unit": "ns/iter",
            "extra": "iterations: 6141895\ncpu: 113.97383299453993 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.2827056366124,
            "unit": "ns/iter",
            "extra": "iterations: 3436426\ncpu: 204.269977878179 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 382.6733903004358,
            "unit": "ns/iter",
            "extra": "iterations: 1830062\ncpu: 382.65452809795516 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 745.4804567758903,
            "unit": "ns/iter",
            "extra": "iterations: 940505\ncpu: 745.4446366579689 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1469.5621090128911,
            "unit": "ns/iter",
            "extra": "iterations: 481154\ncpu: 1469.4629515705965 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2892.353667928229,
            "unit": "ns/iter",
            "extra": "iterations: 242821\ncpu: 2892.054138645343 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5745.019783267164,
            "unit": "ns/iter",
            "extra": "iterations: 121163\ncpu: 5744.562894613029 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 203.8578808142877,
            "unit": "ns/iter",
            "extra": "iterations: 3435546\ncpu: 203.84198930824996 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 409.6431377196039,
            "unit": "ns/iter",
            "extra": "iterations: 1704652\ncpu: 409.60553356344997 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 819.250149220891,
            "unit": "ns/iter",
            "extra": "iterations: 854438\ncpu: 819.1705155903616 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1569.3604544017553,
            "unit": "ns/iter",
            "extra": "iterations: 446037\ncpu: 1569.2617226822003 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3103.636330568236,
            "unit": "ns/iter",
            "extra": "iterations: 225430\ncpu: 3103.458514838305 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6176.66171049609,
            "unit": "ns/iter",
            "extra": "iterations: 113394\ncpu: 6176.513263488373 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12313.50642840806,
            "unit": "ns/iter",
            "extra": "iterations: 56857\ncpu: 12313.2384930615 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24591.10954175614,
            "unit": "ns/iter",
            "extra": "iterations: 28391\ncpu: 24590.509422000025 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49143.842097872905,
            "unit": "ns/iter",
            "extra": "iterations: 14243\ncpu: 49139.54012497369 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98285.00926055889,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98279.75641925074 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196463.81621773166,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 196455.22138047076 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.12672477974199,
            "unit": "ns/iter",
            "extra": "iterations: 25708500\ncpu: 27.125686212731104 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.174315281798425,
            "unit": "ns/iter",
            "extra": "iterations: 26744798\ncpu: 26.173746348729065 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 28.675216006858,
            "unit": "ns/iter",
            "extra": "iterations: 24372953\ncpu: 28.674091809884395 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 53.241020888979726,
            "unit": "ns/iter",
            "extra": "iterations: 13129028\ncpu: 53.237131415973735 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 64.62986499118762,
            "unit": "ns/iter",
            "extra": "iterations: 10751150\ncpu: 64.62358612799586 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 82.51009437451935,
            "unit": "ns/iter",
            "extra": "iterations: 8464467\ncpu: 82.50329181979137 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 119.69491659762654,
            "unit": "ns/iter",
            "extra": "iterations: 5854150\ncpu: 119.69200874593193 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 186.25137622624706,
            "unit": "ns/iter",
            "extra": "iterations: 3763916\ncpu: 186.24614390969478 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.6344691924768,
            "unit": "ns/iter",
            "extra": "iterations: 2361355\ncpu: 296.6321048719898 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 540.1716003671768,
            "unit": "ns/iter",
            "extra": "iterations: 1296390\ncpu: 540.1232885165717 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1028.978047608943,
            "unit": "ns/iter",
            "extra": "iterations: 678696\ncpu: 1028.8878054386666 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 630.8316959840153,
            "unit": "ns/iter",
            "extra": "iterations: 1110437\ncpu: 631.1452536255213 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 630.7704219659029,
            "unit": "ns/iter",
            "extra": "iterations: 1107680\ncpu: 631.2753891000026 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 629.7789921717556,
            "unit": "ns/iter",
            "extra": "iterations: 1109463\ncpu: 630.1894159600588 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 678.5080238905155,
            "unit": "ns/iter",
            "extra": "iterations: 1022446\ncpu: 685.0897123178202 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 681.6088379693023,
            "unit": "ns/iter",
            "extra": "iterations: 1016975\ncpu: 687.8463767534895 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 680.3272722527353,
            "unit": "ns/iter",
            "extra": "iterations: 1019619\ncpu: 686.5768154610089 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 682.8368848926162,
            "unit": "ns/iter",
            "extra": "iterations: 1015283\ncpu: 689.2706516308317 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 684.5362317543626,
            "unit": "ns/iter",
            "extra": "iterations: 1012689\ncpu: 691.1848524087612 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 744.7662365892595,
            "unit": "ns/iter",
            "extra": "iterations: 944117\ncpu: 742.5848734855372 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 776.7413734174463,
            "unit": "ns/iter",
            "extra": "iterations: 904327\ncpu: 774.7526481002019 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 816.03240318894,
            "unit": "ns/iter",
            "extra": "iterations: 854638\ncpu: 816.4596671364245 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 617.9008134724772,
            "unit": "ns/iter",
            "extra": "iterations: 1128006\ncpu: 619.7468559550605 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 636.0011780421762,
            "unit": "ns/iter",
            "extra": "iterations: 1097581\ncpu: 637.7975593599311 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 639.5497296551516,
            "unit": "ns/iter",
            "extra": "iterations: 1092326\ncpu: 641.33122711842 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 652.5841300033306,
            "unit": "ns/iter",
            "extra": "iterations: 1071544\ncpu: 653.7346613825061 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 674.239252850063,
            "unit": "ns/iter",
            "extra": "iterations: 1035298\ncpu: 675.9184080477196 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 706.9245443452135,
            "unit": "ns/iter",
            "extra": "iterations: 988607\ncpu: 708.6511798822224 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 769.7624921156339,
            "unit": "ns/iter",
            "extra": "iterations: 904231\ncpu: 771.2265029705383 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 904.8444839039608,
            "unit": "ns/iter",
            "extra": "iterations: 772814\ncpu: 906.6561630595631 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1163.2808527422053,
            "unit": "ns/iter",
            "extra": "iterations: 602718\ncpu: 1165.0740495553537 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1653.3511424516091,
            "unit": "ns/iter",
            "extra": "iterations: 421470\ncpu: 1655.1233255010745 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2632.227921273725,
            "unit": "ns/iter",
            "extra": "iterations: 264938\ncpu: 2633.9252617666702 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 664.0105795903819,
            "unit": "ns/iter",
            "extra": "iterations: 1047014\ncpu: 668.1203403182874 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "daf6d86ab8be84a5246c2580017eb72629e5e815",
          "message": "docs: normalize indentation in UML diagram (#95)\n\nNormalizes indentation and formatting of the UML class diagram to improve readability and maintain consistent style across documentation.\n\nNo semantic changes to the diagram content; purely whitespace/layout adjustments to make the file easier to review and edit going forward.",
          "timestamp": "2025-11-13T06:49:32Z",
          "url": "https://github.com/3uclid3/ant/commit/daf6d86ab8be84a5246c2580017eb72629e5e815"
        },
        "date": 1763090737925,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1162.4850903266738,
            "unit": "ns/iter",
            "extra": "iterations: 607126\ncpu: 1163.8178269419907 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1673.9340922832366,
            "unit": "ns/iter",
            "extra": "iterations: 418828\ncpu: 1675.2687857544624 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2740.9452341602328,
            "unit": "ns/iter",
            "extra": "iterations: 258409\ncpu: 2741.678393554743 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 5016.399716784974,
            "unit": "ns/iter",
            "extra": "iterations: 141220\ncpu: 5016.67877071303 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9239.142725397569,
            "unit": "ns/iter",
            "extra": "iterations: 75782\ncpu: 9238.165514239607 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17853.6952335563,
            "unit": "ns/iter",
            "extra": "iterations: 38938\ncpu: 17852.327263856085 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35040.47999335334,
            "unit": "ns/iter",
            "extra": "iterations: 19144\ncpu: 35035.23730672599 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69650.51352962574,
            "unit": "ns/iter",
            "extra": "iterations: 10089\ncpu: 69643.10466844484 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138350.41508617494,
            "unit": "ns/iter",
            "extra": "iterations: 5064\ncpu: 138339.8746050628 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275937.3811019895,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 275932.92874014506 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 551098.758268646,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 551094.1748031684 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.279538797160793,
            "unit": "ns/iter",
            "extra": "iterations: 26828369\ncpu: 25.278190485601268 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 32.285760971653126,
            "unit": "ns/iter",
            "extra": "iterations: 22080678\ncpu: 32.2828913586802 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.27786057394447,
            "unit": "ns/iter",
            "extra": "iterations: 15535475\ncpu: 45.27266131225477 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 69.75556548756684,
            "unit": "ns/iter",
            "extra": "iterations: 10003571\ncpu: 69.74892166007521 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 115.74279047099074,
            "unit": "ns/iter",
            "extra": "iterations: 6104525\ncpu: 115.73329341758756 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 207.303499788712,
            "unit": "ns/iter",
            "extra": "iterations: 3424121\ncpu: 207.29482924230814 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 383.21998072490595,
            "unit": "ns/iter",
            "extra": "iterations: 1789875\ncpu: 383.20056763740337 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 742.8937587761748,
            "unit": "ns/iter",
            "extra": "iterations: 942892\ncpu: 742.8310570033466 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1456.6941964284974,
            "unit": "ns/iter",
            "extra": "iterations: 480256\ncpu: 1456.6415557535995 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2951.469882748751,
            "unit": "ns/iter",
            "extra": "iterations: 242386\ncpu: 2951.2279257052787 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5755.318837729879,
            "unit": "ns/iter",
            "extra": "iterations: 122037\ncpu: 5754.670583511534 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 205.31816501354024,
            "unit": "ns/iter",
            "extra": "iterations: 3413562\ncpu: 205.29913298777055 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 413.3569828821006,
            "unit": "ns/iter",
            "extra": "iterations: 1692675\ncpu: 413.3331176983174 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 818.6895575407351,
            "unit": "ns/iter",
            "extra": "iterations: 855785\ncpu: 818.6220382455863 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1571.8190879228162,
            "unit": "ns/iter",
            "extra": "iterations: 445664\ncpu: 1571.6961948912187 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3106.6810192695057,
            "unit": "ns/iter",
            "extra": "iterations: 225534\ncpu: 3106.4764736137276 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6177.42178763515,
            "unit": "ns/iter",
            "extra": "iterations: 113211\ncpu: 6177.033618641271 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12327.112964660753,
            "unit": "ns/iter",
            "extra": "iterations: 56708\ncpu: 12326.789359525965 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24600.25513505804,
            "unit": "ns/iter",
            "extra": "iterations: 28432\ncpu: 24599.061866910582 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49319.871232879384,
            "unit": "ns/iter",
            "extra": "iterations: 14235\ncpu: 49317.48275377587 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98499.0084459353,
            "unit": "ns/iter",
            "extra": "iterations: 7104\ncpu: 98493.81292229735 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196790.2486668713,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 196779.426887454 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.958267356486772,
            "unit": "ns/iter",
            "extra": "iterations: 26098802\ncpu: 26.95651156708267 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.088298273112258,
            "unit": "ns/iter",
            "extra": "iterations: 26865633\ncpu: 26.087561942054396 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 27.957328047821726,
            "unit": "ns/iter",
            "extra": "iterations: 25128309\ncpu: 27.95462102125557 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 35.139325710707794,
            "unit": "ns/iter",
            "extra": "iterations: 19920085\ncpu: 35.138478776571446 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 47.61422072687435,
            "unit": "ns/iter",
            "extra": "iterations: 14687899\ncpu: 47.61044680386178 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 68.68145733739436,
            "unit": "ns/iter",
            "extra": "iterations: 10190365\ncpu: 68.68150061356934 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 103.37778904813965,
            "unit": "ns/iter",
            "extra": "iterations: 6776864\ncpu: 103.37014244346646 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 168.31038320414044,
            "unit": "ns/iter",
            "extra": "iterations: 4161124\ncpu: 168.30319932787347 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.6852582979278,
            "unit": "ns/iter",
            "extra": "iterations: 2362156\ncpu: 296.6605253844375 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 543.3499459003008,
            "unit": "ns/iter",
            "extra": "iterations: 1289285\ncpu: 543.3359784686864 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1030.6807217734588,
            "unit": "ns/iter",
            "extra": "iterations: 678828\ncpu: 1030.6337422734566 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 629.5731289134336,
            "unit": "ns/iter",
            "extra": "iterations: 1110375\ncpu: 628.8809177072968 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 635.1629783531467,
            "unit": "ns/iter",
            "extra": "iterations: 1113516\ncpu: 634.2701820208698 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 631.098241037627,
            "unit": "ns/iter",
            "extra": "iterations: 1111979\ncpu: 630.8829087563114 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 671.2596496465868,
            "unit": "ns/iter",
            "extra": "iterations: 1040999\ncpu: 672.1168723490923 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 671.8834715939572,
            "unit": "ns/iter",
            "extra": "iterations: 1041111\ncpu: 672.2781557413692 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 673.8399141486793,
            "unit": "ns/iter",
            "extra": "iterations: 1038699\ncpu: 674.0443468240896 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 674.3217327730761,
            "unit": "ns/iter",
            "extra": "iterations: 1037395\ncpu: 675.3908106386208 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 676.0734681350283,
            "unit": "ns/iter",
            "extra": "iterations: 1034462\ncpu: 677.1238566563816 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 737.1691715658513,
            "unit": "ns/iter",
            "extra": "iterations: 952134\ncpu: 736.374662600576 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 771.7609359635007,
            "unit": "ns/iter",
            "extra": "iterations: 871950\ncpu: 776.0885325949263 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 799.7219688889498,
            "unit": "ns/iter",
            "extra": "iterations: 871773\ncpu: 803.5721753236927 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 617.1371141999008,
            "unit": "ns/iter",
            "extra": "iterations: 1131444\ncpu: 619.1483546679042 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 634.9646110574807,
            "unit": "ns/iter",
            "extra": "iterations: 1093391\ncpu: 640.8779073523635 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 639.0068768137576,
            "unit": "ns/iter",
            "extra": "iterations: 1082484\ncpu: 643.3110919033352 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 650.2992041541711,
            "unit": "ns/iter",
            "extra": "iterations: 1068608\ncpu: 654.3546370524417 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 681.3517881553723,
            "unit": "ns/iter",
            "extra": "iterations: 1026831\ncpu: 685.2120008061527 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 712.9071265706153,
            "unit": "ns/iter",
            "extra": "iterations: 977654\ncpu: 717.4953429327572 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 776.7327668921228,
            "unit": "ns/iter",
            "extra": "iterations: 900517\ncpu: 780.7147516323937 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 909.1861780532618,
            "unit": "ns/iter",
            "extra": "iterations: 767824\ncpu: 912.9937316369533 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1157.0837679628198,
            "unit": "ns/iter",
            "extra": "iterations: 605804\ncpu: 1160.277035145906 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1648.7577816784558,
            "unit": "ns/iter",
            "extra": "iterations: 424043\ncpu: 1651.9716160825226 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2630.8165954730584,
            "unit": "ns/iter",
            "extra": "iterations: 265615\ncpu: 2633.966436386979 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 664.6873709620547,
            "unit": "ns/iter",
            "extra": "iterations: 1042280\ncpu: 672.7713368762204 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "daf6d86ab8be84a5246c2580017eb72629e5e815",
          "message": "docs: normalize indentation in UML diagram (#95)\n\nNormalizes indentation and formatting of the UML class diagram to improve readability and maintain consistent style across documentation.\n\nNo semantic changes to the diagram content; purely whitespace/layout adjustments to make the file easier to review and edit going forward.",
          "timestamp": "2025-11-13T06:49:32Z",
          "url": "https://github.com/3uclid3/ant/commit/daf6d86ab8be84a5246c2580017eb72629e5e815"
        },
        "date": 1763176912738,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1158.4125868682872,
            "unit": "ns/iter",
            "extra": "iterations: 604995\ncpu: 1159.9864626981937 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1674.0334300699596,
            "unit": "ns/iter",
            "extra": "iterations: 418306\ncpu: 1675.8269998519193 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2708.5630987638283,
            "unit": "ns/iter",
            "extra": "iterations: 257612\ncpu: 2709.8741362983055 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4944.160466342303,
            "unit": "ns/iter",
            "extra": "iterations: 140933\ncpu: 4945.37625680361 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9245.169232197062,
            "unit": "ns/iter",
            "extra": "iterations: 75748\ncpu: 9246.980646356027 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17892.86834099136,
            "unit": "ns/iter",
            "extra": "iterations: 39101\ncpu: 17893.955960203617 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35361.065795404575,
            "unit": "ns/iter",
            "extra": "iterations: 19971\ncpu: 35358.615091883825 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69586.28191655784,
            "unit": "ns/iter",
            "extra": "iterations: 10081\ncpu: 69588.41047515125 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138379.2266692732,
            "unit": "ns/iter",
            "extra": "iterations: 5047\ncpu: 138365.21636616308 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275999.4292472605,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 276002.1852581954 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 551489.0676631859,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 551468.7631786133 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.38740502349841,
            "unit": "ns/iter",
            "extra": "iterations: 27557606\ncpu: 25.38634259449094 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 32.13042376911017,
            "unit": "ns/iter",
            "extra": "iterations: 21819075\ncpu: 32.12689955921595 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.48026677196497,
            "unit": "ns/iter",
            "extra": "iterations: 15407616\ncpu: 45.47736126082056 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 70.38463677522947,
            "unit": "ns/iter",
            "extra": "iterations: 9925273\ncpu: 70.37814073224996 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 114.74488565768229,
            "unit": "ns/iter",
            "extra": "iterations: 6065296\ncpu: 114.73683015635149 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 217.66742365282462,
            "unit": "ns/iter",
            "extra": "iterations: 3069629\ncpu: 217.639585435243 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 382.9639673321925,
            "unit": "ns/iter",
            "extra": "iterations: 1818794\ncpu: 382.93677898651697 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 743.0195435833065,
            "unit": "ns/iter",
            "extra": "iterations: 942253\ncpu: 742.9295030103399 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1480.785009960696,
            "unit": "ns/iter",
            "extra": "iterations: 479385\ncpu: 1480.6296650917318 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2893.075421242292,
            "unit": "ns/iter",
            "extra": "iterations: 242319\ncpu: 2892.7947622761612 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5750.593820252334,
            "unit": "ns/iter",
            "extra": "iterations: 121882\ncpu: 5750.248387784909 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 204.2657260859895,
            "unit": "ns/iter",
            "extra": "iterations: 3431639\ncpu: 204.2450552053986 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 410.53784101349083,
            "unit": "ns/iter",
            "extra": "iterations: 1701289\ncpu: 410.4907737603671 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 819.4326155357717,
            "unit": "ns/iter",
            "extra": "iterations: 854930\ncpu: 819.3927982407935 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1577.5851783725957,
            "unit": "ns/iter",
            "extra": "iterations: 443622\ncpu: 1577.4252381532 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3117.1308984211537,
            "unit": "ns/iter",
            "extra": "iterations: 224594\ncpu: 3117.025472630609 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6230.039809356121,
            "unit": "ns/iter",
            "extra": "iterations: 112461\ncpu: 6229.178301811302 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12331.42472701638,
            "unit": "ns/iter",
            "extra": "iterations: 56780\ncpu: 12330.701003874552 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24635.108197413047,
            "unit": "ns/iter",
            "extra": "iterations: 28448\ncpu: 24632.383155230513 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49166.82750140525,
            "unit": "ns/iter",
            "extra": "iterations: 14232\ncpu: 49163.69154019099 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98427.75302220964,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 98415.42324992974 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196900.71247891916,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 196886.70826307012 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.820107815022503,
            "unit": "ns/iter",
            "extra": "iterations: 26140513\ncpu: 26.81505997988628 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.996472361436968,
            "unit": "ns/iter",
            "extra": "iterations: 26726661\ncpu: 25.993454999859306 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 27.996586529319494,
            "unit": "ns/iter",
            "extra": "iterations: 25063054\ncpu: 27.991683096561296 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 33.85117498993151,
            "unit": "ns/iter",
            "extra": "iterations: 20668092\ncpu: 33.848902501498294 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 43.22605229590268,
            "unit": "ns/iter",
            "extra": "iterations: 16187272\ncpu: 43.22197748947448 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 70.98250250166379,
            "unit": "ns/iter",
            "extra": "iterations: 9866439\ncpu: 70.97648341007385 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 97.326917134442,
            "unit": "ns/iter",
            "extra": "iterations: 7197200\ncpu: 97.31842133051724 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 160.4514463318624,
            "unit": "ns/iter",
            "extra": "iterations: 4366045\ncpu: 160.43909098509113 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 295.865701258214,
            "unit": "ns/iter",
            "extra": "iterations: 2367081\ncpu: 295.8341070711123 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 541.5024194570314,
            "unit": "ns/iter",
            "extra": "iterations: 1294092\ncpu: 541.4740652132957 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1030.5300219312185,
            "unit": "ns/iter",
            "extra": "iterations: 679853\ncpu: 1030.4395994428187 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 629.0827007348682,
            "unit": "ns/iter",
            "extra": "iterations: 1113521\ncpu: 628.2413165121791 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 628.4207240800721,
            "unit": "ns/iter",
            "extra": "iterations: 1116083\ncpu: 627.706601566908 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 627.5469363664228,
            "unit": "ns/iter",
            "extra": "iterations: 1115883\ncpu: 626.869017625829 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 685.5194401861577,
            "unit": "ns/iter",
            "extra": "iterations: 1025737\ncpu: 690.3615195775051 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 686.8383043413776,
            "unit": "ns/iter",
            "extra": "iterations: 1024338\ncpu: 685.0110930207861 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 688.5771923117479,
            "unit": "ns/iter",
            "extra": "iterations: 1021954\ncpu: 686.7278771843961 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 690.2185097379706,
            "unit": "ns/iter",
            "extra": "iterations: 1019268\ncpu: 688.5226123042634 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 694.6770487162831,
            "unit": "ns/iter",
            "extra": "iterations: 1015150\ncpu: 692.8476195628745 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 751.6248408876907,
            "unit": "ns/iter",
            "extra": "iterations: 936376\ncpu: 747.4942843507717 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 781.8052418591121,
            "unit": "ns/iter",
            "extra": "iterations: 900024\ncpu: 778.3651602613928 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 826.3934173306903,
            "unit": "ns/iter",
            "extra": "iterations: 846798\ncpu: 825.4021006172765 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 625.678543107822,
            "unit": "ns/iter",
            "extra": "iterations: 1119808\ncpu: 626.6100697602684 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 640.8530872805319,
            "unit": "ns/iter",
            "extra": "iterations: 1092710\ncpu: 642.3477958449068 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 646.7656345649265,
            "unit": "ns/iter",
            "extra": "iterations: 1080714\ncpu: 648.0184304181627 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 658.4671950141206,
            "unit": "ns/iter",
            "extra": "iterations: 1062186\ncpu: 659.6031749657825 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 681.2909925676429,
            "unit": "ns/iter",
            "extra": "iterations: 1026552\ncpu: 682.7187205255354 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 713.5499922389388,
            "unit": "ns/iter",
            "extra": "iterations: 980212\ncpu: 714.928759289692 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 776.6007264820564,
            "unit": "ns/iter",
            "extra": "iterations: 897743\ncpu: 777.4648891753204 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 912.121046499183,
            "unit": "ns/iter",
            "extra": "iterations: 766028\ncpu: 913.10232655174 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1162.8627776441265,
            "unit": "ns/iter",
            "extra": "iterations: 603495\ncpu: 1162.9849526397452 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1655.836604149909,
            "unit": "ns/iter",
            "extra": "iterations: 423695\ncpu: 1655.6585185068975 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2638.7388090983923,
            "unit": "ns/iter",
            "extra": "iterations: 265438\ncpu: 2637.8296551355866 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 672.5165371923811,
            "unit": "ns/iter",
            "extra": "iterations: 1031856\ncpu: 680.3913007261255 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "daf6d86ab8be84a5246c2580017eb72629e5e815",
          "message": "docs: normalize indentation in UML diagram (#95)\n\nNormalizes indentation and formatting of the UML class diagram to improve readability and maintain consistent style across documentation.\n\nNo semantic changes to the diagram content; purely whitespace/layout adjustments to make the file easier to review and edit going forward.",
          "timestamp": "2025-11-13T06:49:32Z",
          "url": "https://github.com/3uclid3/ant/commit/daf6d86ab8be84a5246c2580017eb72629e5e815"
        },
        "date": 1763263711551,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1156.6344602866052,
            "unit": "ns/iter",
            "extra": "iterations: 604580\ncpu: 1158.1861209434687 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1675.3297866211483,
            "unit": "ns/iter",
            "extra": "iterations: 417006\ncpu: 1676.8011227658076 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2711.50860746359,
            "unit": "ns/iter",
            "extra": "iterations: 258148\ncpu: 2712.9012155816517 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4946.84387923888,
            "unit": "ns/iter",
            "extra": "iterations: 140987\ncpu: 4948.487498847561 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9248.805307266377,
            "unit": "ns/iter",
            "extra": "iterations: 75632\ncpu: 9250.340583352528 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17862.86909861517,
            "unit": "ns/iter",
            "extra": "iterations: 39228\ncpu: 17863.08738655995 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35083.73536632725,
            "unit": "ns/iter",
            "extra": "iterations: 19971\ncpu: 35078.77958039075 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69484.02031921182,
            "unit": "ns/iter",
            "extra": "iterations: 10089\ncpu: 69471.39865200673 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138342.71473735335,
            "unit": "ns/iter",
            "extra": "iterations: 5062\ncpu: 138326.39668115447 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275921.94321753684,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 275910.2247634104 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 553535.868503875,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 553510.9535433265 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.29615831737054,
            "unit": "ns/iter",
            "extra": "iterations: 27589291\ncpu: 25.293815886751148 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.785576546231677,
            "unit": "ns/iter",
            "extra": "iterations: 22019830\ncpu: 31.782255221770505 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.85545194207258,
            "unit": "ns/iter",
            "extra": "iterations: 15312250\ncpu: 45.85179937631628 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 70.46333607427206,
            "unit": "ns/iter",
            "extra": "iterations: 9930906\ncpu: 70.45463304153719 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 115.07290486797808,
            "unit": "ns/iter",
            "extra": "iterations: 6110319\ncpu: 114.87690266252876 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.79170931137963,
            "unit": "ns/iter",
            "extra": "iterations: 3418751\ncpu: 204.77778288035594 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 383.9732753797379,
            "unit": "ns/iter",
            "extra": "iterations: 1814095\ncpu: 383.96097503162713 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 742.7410739073061,
            "unit": "ns/iter",
            "extra": "iterations: 940137\ncpu: 742.6679771139723 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1460.2474365656958,
            "unit": "ns/iter",
            "extra": "iterations: 479630\ncpu: 1460.1167608364754 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2891.0894345508045,
            "unit": "ns/iter",
            "extra": "iterations: 242356\ncpu: 2890.850096552174 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5760.36163648773,
            "unit": "ns/iter",
            "extra": "iterations: 121553\ncpu: 5759.816532705895 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 204.0855395404034,
            "unit": "ns/iter",
            "extra": "iterations: 3432097\ncpu: 204.0673189015341 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 410.71399372708595,
            "unit": "ns/iter",
            "extra": "iterations: 1707022\ncpu: 410.6710294302013 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 818.4485853063118,
            "unit": "ns/iter",
            "extra": "iterations: 845342\ncpu: 818.3781794823878 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1572.4830914516554,
            "unit": "ns/iter",
            "extra": "iterations: 446017\ncpu: 1572.343045220252 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3109.7525882831283,
            "unit": "ns/iter",
            "extra": "iterations: 223797\ncpu: 3109.4228608962626 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6175.895348529054,
            "unit": "ns/iter",
            "extra": "iterations: 113233\ncpu: 6175.135684826861 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12322.148035349523,
            "unit": "ns/iter",
            "extra": "iterations: 56804\ncpu: 12321.031775931251 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24601.147218118927,
            "unit": "ns/iter",
            "extra": "iterations: 28434\ncpu: 24598.05022156565 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49185.98721011957,
            "unit": "ns/iter",
            "extra": "iterations: 14230\ncpu: 49181.100843288834 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98332.63930733303,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 98321.51837251893 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196714.73370786448,
            "unit": "ns/iter",
            "extra": "iterations: 3560\ncpu: 196693.00955056094 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.619263342903267,
            "unit": "ns/iter",
            "extra": "iterations: 26364614\ncpu: 26.615766420854893 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.824859919185133,
            "unit": "ns/iter",
            "extra": "iterations: 27200370\ncpu: 25.82181786497751 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 28.490187817968685,
            "unit": "ns/iter",
            "extra": "iterations: 24800396\ncpu: 28.48712984260392 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 33.3252419910326,
            "unit": "ns/iter",
            "extra": "iterations: 21048094\ncpu: 33.3208382668758 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 42.766577575059394,
            "unit": "ns/iter",
            "extra": "iterations: 16294090\ncpu: 42.76159975794902 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 64.02964721346656,
            "unit": "ns/iter",
            "extra": "iterations: 10897213\ncpu: 64.02493839479888 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 96.74943982474744,
            "unit": "ns/iter",
            "extra": "iterations: 7232558\ncpu: 96.74258747734825 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 159.76115016420133,
            "unit": "ns/iter",
            "extra": "iterations: 4384487\ncpu: 159.75395319908648 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.348381500715,
            "unit": "ns/iter",
            "extra": "iterations: 2361107\ncpu: 296.3388825665251 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 542.1105221171842,
            "unit": "ns/iter",
            "extra": "iterations: 1292411\ncpu: 542.0890204431862 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1033.0476676770502,
            "unit": "ns/iter",
            "extra": "iterations: 676643\ncpu: 1033.016564126137 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 631.7292781447474,
            "unit": "ns/iter",
            "extra": "iterations: 1110217\ncpu: 629.9158092557282 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 631.6632515371896,
            "unit": "ns/iter",
            "extra": "iterations: 1112302\ncpu: 629.5463696017345 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 632.3848844392387,
            "unit": "ns/iter",
            "extra": "iterations: 1109572\ncpu: 630.2842672623542 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 688.4538149802672,
            "unit": "ns/iter",
            "extra": "iterations: 1014658\ncpu: 689.7495412251192 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 690.7383314239327,
            "unit": "ns/iter",
            "extra": "iterations: 1014027\ncpu: 692.1473856208588 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 693.6593782916209,
            "unit": "ns/iter",
            "extra": "iterations: 1007176\ncpu: 694.7044538428828 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 693.6382045261997,
            "unit": "ns/iter",
            "extra": "iterations: 1008053\ncpu: 694.8172149669879 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 696.572866761733,
            "unit": "ns/iter",
            "extra": "iterations: 1001760\ncpu: 697.9359736909787 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 755.5011817858715,
            "unit": "ns/iter",
            "extra": "iterations: 927853\ncpu: 751.9266888177649 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 783.6005155859882,
            "unit": "ns/iter",
            "extra": "iterations: 893324\ncpu: 783.4116793033227 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 816.4651505247243,
            "unit": "ns/iter",
            "extra": "iterations: 854259\ncpu: 817.1303901993208 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 620.4248481722739,
            "unit": "ns/iter",
            "extra": "iterations: 1127624\ncpu: 622.3912217219644 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 636.2834786476751,
            "unit": "ns/iter",
            "extra": "iterations: 1097095\ncpu: 637.9013722611926 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 640.6367435056951,
            "unit": "ns/iter",
            "extra": "iterations: 1085079\ncpu: 644.184587483272 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 652.8693745656262,
            "unit": "ns/iter",
            "extra": "iterations: 1066454\ncpu: 655.9729655397732 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 679.4236528446975,
            "unit": "ns/iter",
            "extra": "iterations: 1024858\ncpu: 682.4744901257014 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 710.6088388680217,
            "unit": "ns/iter",
            "extra": "iterations: 978313\ncpu: 713.9746849914578 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 774.0637832962886,
            "unit": "ns/iter",
            "extra": "iterations: 900988\ncpu: 777.2694031540208 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 908.689705811217,
            "unit": "ns/iter",
            "extra": "iterations: 769560\ncpu: 911.5376864656275 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1154.7988005317331,
            "unit": "ns/iter",
            "extra": "iterations: 603764\ncpu: 1157.6454558330497 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1646.0371306641703,
            "unit": "ns/iter",
            "extra": "iterations: 423424\ncpu: 1647.848534816701 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2635.2847694531106,
            "unit": "ns/iter",
            "extra": "iterations: 266117\ncpu: 2637.7138965372897 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 670.2302107998374,
            "unit": "ns/iter",
            "extra": "iterations: 1025117\ncpu: 678.8345496193923 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "daf6d86ab8be84a5246c2580017eb72629e5e815",
          "message": "docs: normalize indentation in UML diagram (#95)\n\nNormalizes indentation and formatting of the UML class diagram to improve readability and maintain consistent style across documentation.\n\nNo semantic changes to the diagram content; purely whitespace/layout adjustments to make the file easier to review and edit going forward.",
          "timestamp": "2025-11-13T06:49:32Z",
          "url": "https://github.com/3uclid3/ant/commit/daf6d86ab8be84a5246c2580017eb72629e5e815"
        },
        "date": 1763350052684,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1152.9874395203415,
            "unit": "ns/iter",
            "extra": "iterations: 605790\ncpu: 1155.3718598854803 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1671.3999976180594,
            "unit": "ns/iter",
            "extra": "iterations: 418075\ncpu: 1673.0304777851075 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2707.0762862420383,
            "unit": "ns/iter",
            "extra": "iterations: 253060\ncpu: 2710.091855687227 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4945.936381208212,
            "unit": "ns/iter",
            "extra": "iterations: 141782\ncpu: 4948.647994808851 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9249.180913422984,
            "unit": "ns/iter",
            "extra": "iterations: 75865\ncpu: 9250.004231201305 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17841.70852963852,
            "unit": "ns/iter",
            "extra": "iterations: 39263\ncpu: 17842.848050324996 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35031.73352684887,
            "unit": "ns/iter",
            "extra": "iterations: 19987\ncpu: 35029.17611447497 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69406.6030535356,
            "unit": "ns/iter",
            "extra": "iterations: 10087\ncpu: 69403.121939134 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138229.8735200433,
            "unit": "ns/iter",
            "extra": "iterations: 5068\ncpu: 138230.65213101922 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275802.34724393726,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 275810.59921259806 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 551735.3894571672,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 551727.6664043966 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.334793054207672,
            "unit": "ns/iter",
            "extra": "iterations: 27653232\ncpu: 25.333304042001334 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 32.146184501771124,
            "unit": "ns/iter",
            "extra": "iterations: 21822327\ncpu: 32.14476260941377 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.34394744731739,
            "unit": "ns/iter",
            "extra": "iterations: 15436396\ncpu: 45.343165852962045 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 70.40850784199375,
            "unit": "ns/iter",
            "extra": "iterations: 9544512\ncpu: 70.40626288698675 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 114.22401063314538,
            "unit": "ns/iter",
            "extra": "iterations: 6124245\ncpu: 114.2177897847001 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.2877240168232,
            "unit": "ns/iter",
            "extra": "iterations: 3428035\ncpu: 204.2795974953583 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 382.5765312553119,
            "unit": "ns/iter",
            "extra": "iterations: 1824810\ncpu: 382.5298639310381 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 744.0338457366419,
            "unit": "ns/iter",
            "extra": "iterations: 936632\ncpu: 744.00742233876 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1461.4620365681196,
            "unit": "ns/iter",
            "extra": "iterations: 479817\ncpu: 1461.338847935775 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2893.7318291500533,
            "unit": "ns/iter",
            "extra": "iterations: 242435\ncpu: 2893.564138841343 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5770.1196836035315,
            "unit": "ns/iter",
            "extra": "iterations: 121746\ncpu: 5769.752903586149 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 204.46146347443388,
            "unit": "ns/iter",
            "extra": "iterations: 3426230\ncpu: 204.45820479068905 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 411.31496775893015,
            "unit": "ns/iter",
            "extra": "iterations: 1700936\ncpu: 411.28378669156234 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 817.647812015006,
            "unit": "ns/iter",
            "extra": "iterations: 852451\ncpu: 817.6092760756926 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1575.185894431401,
            "unit": "ns/iter",
            "extra": "iterations: 445909\ncpu: 1575.0711154069575 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3105.1677477134835,
            "unit": "ns/iter",
            "extra": "iterations: 225553\ncpu: 3105.085704911919 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6171.066304041118,
            "unit": "ns/iter",
            "extra": "iterations: 113432\ncpu: 6170.6797817194665 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12305.486000247043,
            "unit": "ns/iter",
            "extra": "iterations: 56751\ncpu: 12304.5698049374 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24580.340551942332,
            "unit": "ns/iter",
            "extra": "iterations: 28445\ncpu: 24578.912708736156 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49160.991502212484,
            "unit": "ns/iter",
            "extra": "iterations: 14239\ncpu: 49156.42004354239 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98237.09301346875,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 98231.68813131275 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196465.91954993393,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 196451.12686357298 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.351197715016863,
            "unit": "ns/iter",
            "extra": "iterations: 25578831\ncpu: 27.34957254301426 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.858413591063243,
            "unit": "ns/iter",
            "extra": "iterations: 27049835\ncpu: 25.855180447496306 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 28.066618318738126,
            "unit": "ns/iter",
            "extra": "iterations: 24955223\ncpu: 28.063989891013993 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 34.56401544633229,
            "unit": "ns/iter",
            "extra": "iterations: 20325860\ncpu: 34.56057111482632 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 43.86371680936409,
            "unit": "ns/iter",
            "extra": "iterations: 15871231\ncpu: 43.86115897374327 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 65.49739186180612,
            "unit": "ns/iter",
            "extra": "iterations: 10678882\ncpu: 65.49201508172838 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 97.6804773071581,
            "unit": "ns/iter",
            "extra": "iterations: 7170896\ncpu: 97.67412189494871 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 160.71779177157464,
            "unit": "ns/iter",
            "extra": "iterations: 4356216\ncpu: 160.70271974575968 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.81351799563936,
            "unit": "ns/iter",
            "extra": "iterations: 2361933\ncpu: 296.79246701748326 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 540.6412795536917,
            "unit": "ns/iter",
            "extra": "iterations: 1296327\ncpu: 540.6143272492226 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1032.2490150906533,
            "unit": "ns/iter",
            "extra": "iterations: 679758\ncpu: 1032.1496444322765 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 629.6350735368925,
            "unit": "ns/iter",
            "extra": "iterations: 1113153\ncpu: 628.7425268543407 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 629.7306534042694,
            "unit": "ns/iter",
            "extra": "iterations: 1113439\ncpu: 628.8541967704665 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 629.1811517102775,
            "unit": "ns/iter",
            "extra": "iterations: 1107061\ncpu: 629.9275243184225 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 675.0891769630313,
            "unit": "ns/iter",
            "extra": "iterations: 1030210\ncpu: 678.9127090596594 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 676.1770091081961,
            "unit": "ns/iter",
            "extra": "iterations: 1027659\ncpu: 680.0188944024577 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 675.5508895603772,
            "unit": "ns/iter",
            "extra": "iterations: 1030693\ncpu: 679.3864526085947 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 679.5553464490683,
            "unit": "ns/iter",
            "extra": "iterations: 1023950\ncpu: 683.6999736331692 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 683.0000764257953,
            "unit": "ns/iter",
            "extra": "iterations: 1020351\ncpu: 687.3146162460804 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 737.303588317495,
            "unit": "ns/iter",
            "extra": "iterations: 942309\ncpu: 742.4103176391986 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 769.5719338868695,
            "unit": "ns/iter",
            "extra": "iterations: 903816\ncpu: 774.7917087126035 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 797.1979727800632,
            "unit": "ns/iter",
            "extra": "iterations: 867791\ncpu: 807.3874953854591 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 618.3553049972462,
            "unit": "ns/iter",
            "extra": "iterations: 1127907\ncpu: 619.9118854650953 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 637.2302439652376,
            "unit": "ns/iter",
            "extra": "iterations: 1096463\ncpu: 638.849164995157 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 640.9550321992629,
            "unit": "ns/iter",
            "extra": "iterations: 1078572\ncpu: 642.521101050311 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 656.4631794581802,
            "unit": "ns/iter",
            "extra": "iterations: 1062342\ncpu: 657.9481908903913 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 679.625124135128,
            "unit": "ns/iter",
            "extra": "iterations: 1024307\ncpu: 681.4309147522223 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 711.4915887169851,
            "unit": "ns/iter",
            "extra": "iterations: 980527\ncpu: 713.19269944043 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 774.5033362141832,
            "unit": "ns/iter",
            "extra": "iterations: 901775\ncpu: 776.1558171405687 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 908.6075183922458,
            "unit": "ns/iter",
            "extra": "iterations: 768194\ncpu: 910.4522191071881 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1157.1505348002736,
            "unit": "ns/iter",
            "extra": "iterations: 607514\ncpu: 1158.7944607082788 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1645.9296000168035,
            "unit": "ns/iter",
            "extra": "iterations: 423537\ncpu: 1647.3483308391124 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2634.647817556827,
            "unit": "ns/iter",
            "extra": "iterations: 265777\ncpu: 2636.534764106658 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 666.7003758400125,
            "unit": "ns/iter",
            "extra": "iterations: 1040557\ncpu: 674.1829712324906 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9c5844e8c98924283c164c5c2e9d79c8563e55eb",
          "message": "refactor(database): use stack PMR buffer to avoid heap allocations (#97)\n\nRefactors the match-finding path to eliminate dynamic heap allocations by introducing a fixed-size stack buffer and a monotonic_buffer_resource for temporary bitsets. Changes the match-finder to write into a caller-provided PMR dynamic bitset (output parameter) instead of returning one by value.\n\nThis reduces runtime allocations and improves performance/determinism during table matching. Also adds necessary headers for array and cstddef.\n\nNote: signature of the internal match function is changed to accept an output parameter.",
          "timestamp": "2025-11-17T08:17:08Z",
          "url": "https://github.com/3uclid3/ant/commit/9c5844e8c98924283c164c5c2e9d79c8563e55eb"
        },
        "date": 1763436300951,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1187.0291169414404,
            "unit": "ns/iter",
            "extra": "iterations: 585673\ncpu: 1188.4758679332317 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1714.3767505944973,
            "unit": "ns/iter",
            "extra": "iterations: 406221\ncpu: 1715.1714460849705 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2742.5531373937883,
            "unit": "ns/iter",
            "extra": "iterations: 256994\ncpu: 2743.9759605279264 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4936.74872850281,
            "unit": "ns/iter",
            "extra": "iterations: 141369\ncpu: 4937.520496007548 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9271.834147994097,
            "unit": "ns/iter",
            "extra": "iterations: 75489\ncpu: 9273.283259811664 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17872.2237936382,
            "unit": "ns/iter",
            "extra": "iterations: 39246\ncpu: 17871.87193599073 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35044.74545572983,
            "unit": "ns/iter",
            "extra": "iterations: 19969\ncpu: 35047.61325054049 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69479.14156565652,
            "unit": "ns/iter",
            "extra": "iterations: 10066\ncpu: 69464.98569441697 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138233.66627092325,
            "unit": "ns/iter",
            "extra": "iterations: 5061\ncpu: 138221.6488836228 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275862.0988965982,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 275826.62726557354 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 551178.747434051,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 551134.0528808265 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.311311807932416,
            "unit": "ns/iter",
            "extra": "iterations: 27704696\ncpu: 25.306966443522796 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.71849453330803,
            "unit": "ns/iter",
            "extra": "iterations: 22108068\ncpu: 31.713144359787552 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.14457150418446,
            "unit": "ns/iter",
            "extra": "iterations: 15530315\ncpu: 45.13906253672249 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 69.61477085813726,
            "unit": "ns/iter",
            "extra": "iterations: 10078778\ncpu: 69.60949115061354 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 114.14320478040385,
            "unit": "ns/iter",
            "extra": "iterations: 6134879\ncpu: 114.13259609521234 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 203.91060049149766,
            "unit": "ns/iter",
            "extra": "iterations: 3424728\ncpu: 203.88972817695318 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 382.2105452514168,
            "unit": "ns/iter",
            "extra": "iterations: 1770541\ncpu: 382.17216545677337 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 742.4644245966338,
            "unit": "ns/iter",
            "extra": "iterations: 942730\ncpu: 742.4125221431378 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1457.187914190243,
            "unit": "ns/iter",
            "extra": "iterations: 479852\ncpu: 1457.0777531405556 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2895.2474576272375,
            "unit": "ns/iter",
            "extra": "iterations: 242490\ncpu: 2895.029155841482 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5745.581919560587,
            "unit": "ns/iter",
            "extra": "iterations: 121955\ncpu: 5745.37637653234 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 204.02408743648562,
            "unit": "ns/iter",
            "extra": "iterations: 3429049\ncpu: 204.0105454894353 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 409.6347126107125,
            "unit": "ns/iter",
            "extra": "iterations: 1708745\ncpu: 409.6127444410946 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 819.1769008927671,
            "unit": "ns/iter",
            "extra": "iterations: 854388\ncpu: 819.1212505325452 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1571.8357502670833,
            "unit": "ns/iter",
            "extra": "iterations: 445468\ncpu: 1571.770441423402 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3107.417062158587,
            "unit": "ns/iter",
            "extra": "iterations: 225247\ncpu: 3107.1618534320123 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6176.0631493538085,
            "unit": "ns/iter",
            "extra": "iterations: 113382\ncpu: 6175.80941419271 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12316.251347542779,
            "unit": "ns/iter",
            "extra": "iterations: 56770\ncpu: 12315.78351241856 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24597.425199618876,
            "unit": "ns/iter",
            "extra": "iterations: 28429\ncpu: 24595.88937352707 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49256.78453543101,
            "unit": "ns/iter",
            "extra": "iterations: 14239\ncpu: 49253.32116019386 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98338.48750701189,
            "unit": "ns/iter",
            "extra": "iterations: 7124\ncpu: 98333.92069062323 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196521.52038234603,
            "unit": "ns/iter",
            "extra": "iterations: 3557\ncpu: 196516.6556086584 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 27.996406866166613,
            "unit": "ns/iter",
            "extra": "iterations: 25889378\ncpu: 27.995138739910956 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.82356030057673,
            "unit": "ns/iter",
            "extra": "iterations: 27139085\ncpu: 25.823033458939474 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 28.230482948280162,
            "unit": "ns/iter",
            "extra": "iterations: 24967539\ncpu: 28.22845783879621 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 34.06369377615781,
            "unit": "ns/iter",
            "extra": "iterations: 20623946\ncpu: 34.06123881433747 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 43.46171058414346,
            "unit": "ns/iter",
            "extra": "iterations: 16121335\ncpu: 43.45692841194599 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 65.13693695304075,
            "unit": "ns/iter",
            "extra": "iterations: 10743864\ncpu: 65.13436683487375 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 97.90011033190297,
            "unit": "ns/iter",
            "extra": "iterations: 7176528\ncpu: 97.88885363507258 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 160.6610858556207,
            "unit": "ns/iter",
            "extra": "iterations: 4330852\ncpu: 160.65430681999712 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.761741550652,
            "unit": "ns/iter",
            "extra": "iterations: 2362699\ncpu: 296.72401139544274 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 540.8961630938536,
            "unit": "ns/iter",
            "extra": "iterations: 1293047\ncpu: 540.8854480927647 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1031.1790540241177,
            "unit": "ns/iter",
            "extra": "iterations: 677438\ncpu: 1031.0723269140517 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 629.5097831399506,
            "unit": "ns/iter",
            "extra": "iterations: 1107008\ncpu: 629.3158911248544 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 633.8479541977034,
            "unit": "ns/iter",
            "extra": "iterations: 1111823\ncpu: 635.0399146266171 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 633.3103000431109,
            "unit": "ns/iter",
            "extra": "iterations: 1099655\ncpu: 634.3319250108423 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 678.9360800351657,
            "unit": "ns/iter",
            "extra": "iterations: 1033371\ncpu: 675.2854599147087 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 679.6772286540165,
            "unit": "ns/iter",
            "extra": "iterations: 1033645\ncpu: 677.3682879522396 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 679.7005841245073,
            "unit": "ns/iter",
            "extra": "iterations: 1033105\ncpu: 677.8689591113512 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 678.070413768834,
            "unit": "ns/iter",
            "extra": "iterations: 1026490\ncpu: 678.5990092505106 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 682.0104609035113,
            "unit": "ns/iter",
            "extra": "iterations: 1028687\ncpu: 682.8233330421242 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 760.1410090303287,
            "unit": "ns/iter",
            "extra": "iterations: 926735\ncpu: 753.698404617788 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 787.7557270686416,
            "unit": "ns/iter",
            "extra": "iterations: 897267\ncpu: 780.6999655627461 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 810.5709014830799,
            "unit": "ns/iter",
            "extra": "iterations: 870842\ncpu: 804.1267784529532 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 616.7885656178323,
            "unit": "ns/iter",
            "extra": "iterations: 1132583\ncpu: 618.7748880215441 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 634.6479812324299,
            "unit": "ns/iter",
            "extra": "iterations: 1035172\ncpu: 636.1382263039462 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 640.5395574766653,
            "unit": "ns/iter",
            "extra": "iterations: 1086735\ncpu: 642.3804073661829 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 653.7536146740897,
            "unit": "ns/iter",
            "extra": "iterations: 1072503\ncpu: 655.4068454796089 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 675.8983683371946,
            "unit": "ns/iter",
            "extra": "iterations: 1030683\ncpu: 677.921016447593 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 709.314683416482,
            "unit": "ns/iter",
            "extra": "iterations: 964436\ncpu: 710.9999792727345 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 771.4967125560944,
            "unit": "ns/iter",
            "extra": "iterations: 900543\ncpu: 772.9460825336993 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 916.5612028070681,
            "unit": "ns/iter",
            "extra": "iterations: 756926\ncpu: 918.2828572512534 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1166.2368218416987,
            "unit": "ns/iter",
            "extra": "iterations: 600236\ncpu: 1167.765210684418 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1652.0884013781792,
            "unit": "ns/iter",
            "extra": "iterations: 423523\ncpu: 1653.9795760753987 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2629.400591157258,
            "unit": "ns/iter",
            "extra": "iterations: 265917\ncpu: 2631.0926492234826 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 670.7216376627835,
            "unit": "ns/iter",
            "extra": "iterations: 1025286\ncpu: 679.910537161016 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9c5844e8c98924283c164c5c2e9d79c8563e55eb",
          "message": "refactor(database): use stack PMR buffer to avoid heap allocations (#97)\n\nRefactors the match-finding path to eliminate dynamic heap allocations by introducing a fixed-size stack buffer and a monotonic_buffer_resource for temporary bitsets. Changes the match-finder to write into a caller-provided PMR dynamic bitset (output parameter) instead of returning one by value.\n\nThis reduces runtime allocations and improves performance/determinism during table matching. Also adds necessary headers for array and cstddef.\n\nNote: signature of the internal match function is changed to accept an output parameter.",
          "timestamp": "2025-11-17T08:17:08Z",
          "url": "https://github.com/3uclid3/ant/commit/9c5844e8c98924283c164c5c2e9d79c8563e55eb"
        },
        "date": 1763522680208,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1159.4007592781468,
            "unit": "ns/iter",
            "extra": "iterations: 601895\ncpu: 1162.0717317803549 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1675.356229196273,
            "unit": "ns/iter",
            "extra": "iterations: 417004\ncpu: 1677.9101183683113 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2710.68930842027,
            "unit": "ns/iter",
            "extra": "iterations: 257960\ncpu: 2713.3674872069196 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4938.624522621489,
            "unit": "ns/iter",
            "extra": "iterations: 141657\ncpu: 4941.050495211078 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9229.873952019583,
            "unit": "ns/iter",
            "extra": "iterations: 75860\ncpu: 9231.991668863406 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17834.778397640977,
            "unit": "ns/iter",
            "extra": "iterations: 39255\ncpu: 17834.069800026704 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35594.09522852379,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 35592.01617183325 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69451.43789683687,
            "unit": "ns/iter",
            "extra": "iterations: 10080\ncpu: 69447.49444444437 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138292.43432744156,
            "unit": "ns/iter",
            "extra": "iterations: 5063\ncpu: 138290.5787082934 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275733.8504154788,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 275737.8563514088 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 551558.7248427863,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 551557.2617924862 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.261634157590617,
            "unit": "ns/iter",
            "extra": "iterations: 27666120\ncpu: 25.25988241213442 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.70070121050289,
            "unit": "ns/iter",
            "extra": "iterations: 22079675\ncpu: 31.69819306670051 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.36352337978679,
            "unit": "ns/iter",
            "extra": "iterations: 15523538\ncpu: 45.36007532561195 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 69.91441939654753,
            "unit": "ns/iter",
            "extra": "iterations: 9959009\ncpu: 69.91133645928025 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 114.01365481721326,
            "unit": "ns/iter",
            "extra": "iterations: 6135051\ncpu: 114.00723221371729 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.19392672286168,
            "unit": "ns/iter",
            "extra": "iterations: 3432776\ncpu: 204.17969684010828 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 382.0916723628439,
            "unit": "ns/iter",
            "extra": "iterations: 1824323\ncpu: 382.05545728470315 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 745.3923030696856,
            "unit": "ns/iter",
            "extra": "iterations: 941856\ncpu: 745.2998048533941 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1459.2598887625177,
            "unit": "ns/iter",
            "extra": "iterations: 479155\ncpu: 1459.1145349625913 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2887.409552648675,
            "unit": "ns/iter",
            "extra": "iterations: 237442\ncpu: 2887.185847491174 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5821.924712596255,
            "unit": "ns/iter",
            "extra": "iterations: 120910\ncpu: 5821.64609213465 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 205.85784746451864,
            "unit": "ns/iter",
            "extra": "iterations: 3406355\ncpu: 205.8483132263076 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 412.221275942015,
            "unit": "ns/iter",
            "extra": "iterations: 1698933\ncpu: 412.22211529236273 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 820.1020269502494,
            "unit": "ns/iter",
            "extra": "iterations: 853647\ncpu: 820.0670933067197 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1573.4715591180463,
            "unit": "ns/iter",
            "extra": "iterations: 445380\ncpu: 1573.3856773990742 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3111.1858436155876,
            "unit": "ns/iter",
            "extra": "iterations: 225227\ncpu: 3111.007761058845 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6182.811784336356,
            "unit": "ns/iter",
            "extra": "iterations: 113269\ncpu: 6182.672072676548 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12334.550461300016,
            "unit": "ns/iter",
            "extra": "iterations: 56796\ncpu: 12334.08983026977 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24637.144730827386,
            "unit": "ns/iter",
            "extra": "iterations: 28439\ncpu: 24634.321178663093 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49195.78052550206,
            "unit": "ns/iter",
            "extra": "iterations: 14234\ncpu: 49192.82113249962 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98374.44491287283,
            "unit": "ns/iter",
            "extra": "iterations: 7116\ncpu: 98368.6493816753 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196700.53322072042,
            "unit": "ns/iter",
            "extra": "iterations: 3552\ncpu: 196690.41272522573 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.70221875720857,
            "unit": "ns/iter",
            "extra": "iterations: 26235588\ncpu: 26.699968645642578 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.97098657836863,
            "unit": "ns/iter",
            "extra": "iterations: 27009086\ncpu: 25.969879913744453 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 27.749843998766725,
            "unit": "ns/iter",
            "extra": "iterations: 25251403\ncpu: 27.74883138176516 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 34.861230342133695,
            "unit": "ns/iter",
            "extra": "iterations: 20105692\ncpu: 34.85953062446208 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 47.459934140094845,
            "unit": "ns/iter",
            "extra": "iterations: 14754956\ncpu: 47.45837229199452 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 68.35883995167788,
            "unit": "ns/iter",
            "extra": "iterations: 10240401\ncpu: 68.3570361160663 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 103.18997788265486,
            "unit": "ns/iter",
            "extra": "iterations: 6783816\ncpu: 103.1783087866767 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 168.04665195826743,
            "unit": "ns/iter",
            "extra": "iterations: 4165420\ncpu: 168.040091035238 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.00755821695736,
            "unit": "ns/iter",
            "extra": "iterations: 2365505\ncpu: 295.9913544887884 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 541.393261952777,
            "unit": "ns/iter",
            "extra": "iterations: 1290641\ncpu: 541.3761781936258 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1029.9660270599504,
            "unit": "ns/iter",
            "extra": "iterations: 679011\ncpu: 1029.894782264197 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 633.2808558969723,
            "unit": "ns/iter",
            "extra": "iterations: 1096719\ncpu: 633.2945677084498 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 633.5223188062075,
            "unit": "ns/iter",
            "extra": "iterations: 1106085\ncpu: 633.3347934365097 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 633.700886038479,
            "unit": "ns/iter",
            "extra": "iterations: 1108310\ncpu: 633.3437152082348 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 679.2479192915226,
            "unit": "ns/iter",
            "extra": "iterations: 1028621\ncpu: 680.9570181824195 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 681.2480355715204,
            "unit": "ns/iter",
            "extra": "iterations: 1025107\ncpu: 682.5346095561289 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 682.0444719161684,
            "unit": "ns/iter",
            "extra": "iterations: 1027300\ncpu: 683.4244446611611 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 684.454177682357,
            "unit": "ns/iter",
            "extra": "iterations: 1020136\ncpu: 686.220944066876 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 688.4180357229715,
            "unit": "ns/iter",
            "extra": "iterations: 1014997\ncpu: 690.0815844746998 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 744.7998312889072,
            "unit": "ns/iter",
            "extra": "iterations: 942390\ncpu: 744.2548965917564 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 773.5960229341339,
            "unit": "ns/iter",
            "extra": "iterations: 905695\ncpu: 772.4239727523565 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 803.407891609958,
            "unit": "ns/iter",
            "extra": "iterations: 873384\ncpu: 802.861524829338 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 622.7901768288078,
            "unit": "ns/iter",
            "extra": "iterations: 1119314\ncpu: 624.2032932666432 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 639.655103995931,
            "unit": "ns/iter",
            "extra": "iterations: 1089453\ncpu: 641.5384683874225 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 653.5933559185165,
            "unit": "ns/iter",
            "extra": "iterations: 1083761\ncpu: 655.6530766398721 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 656.9008088644632,
            "unit": "ns/iter",
            "extra": "iterations: 1062232\ncpu: 658.8434776856639 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 680.9446774920509,
            "unit": "ns/iter",
            "extra": "iterations: 1026237\ncpu: 682.965299439884 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 715.4317248240602,
            "unit": "ns/iter",
            "extra": "iterations: 982575\ncpu: 717.4344462153898 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 775.7050711158971,
            "unit": "ns/iter",
            "extra": "iterations: 901814\ncpu: 777.6081752987 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 911.0522702017021,
            "unit": "ns/iter",
            "extra": "iterations: 769138\ncpu: 912.9892659065149 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1156.8493741537409,
            "unit": "ns/iter",
            "extra": "iterations: 604458\ncpu: 1158.7560508677154 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1650.8620651743913,
            "unit": "ns/iter",
            "extra": "iterations: 424512\ncpu: 1652.6767488325693 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2630.591128369399,
            "unit": "ns/iter",
            "extra": "iterations: 265927\ncpu: 2631.9358357648885 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 668.2908536799872,
            "unit": "ns/iter",
            "extra": "iterations: 1042146\ncpu: 670.7350467249066 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9c5844e8c98924283c164c5c2e9d79c8563e55eb",
          "message": "refactor(database): use stack PMR buffer to avoid heap allocations (#97)\n\nRefactors the match-finding path to eliminate dynamic heap allocations by introducing a fixed-size stack buffer and a monotonic_buffer_resource for temporary bitsets. Changes the match-finder to write into a caller-provided PMR dynamic bitset (output parameter) instead of returning one by value.\n\nThis reduces runtime allocations and improves performance/determinism during table matching. Also adds necessary headers for array and cstddef.\n\nNote: signature of the internal match function is changed to accept an output parameter.",
          "timestamp": "2025-11-17T08:17:08Z",
          "url": "https://github.com/3uclid3/ant/commit/9c5844e8c98924283c164c5c2e9d79c8563e55eb"
        },
        "date": 1763609043247,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1150.8619254523667,
            "unit": "ns/iter",
            "extra": "iterations: 606484\ncpu: 1152.7161244154934 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1668.057982892721,
            "unit": "ns/iter",
            "extra": "iterations: 418658\ncpu: 1669.8043964285723 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2703.8112403497685,
            "unit": "ns/iter",
            "extra": "iterations: 258853\ncpu: 2705.1915256921407 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4981.181709829278,
            "unit": "ns/iter",
            "extra": "iterations: 141792\ncpu: 4983.135275614701 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9239.62351804664,
            "unit": "ns/iter",
            "extra": "iterations: 75661\ncpu: 9241.673517400262 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17880.54177708105,
            "unit": "ns/iter",
            "extra": "iterations: 39208\ncpu: 17882.063532952878 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35082.31846622046,
            "unit": "ns/iter",
            "extra": "iterations: 19977\ncpu: 35079.09616058458 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69461.94254583181,
            "unit": "ns/iter",
            "extra": "iterations: 10095\ncpu: 69468.2973749476 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138349.84004760176,
            "unit": "ns/iter",
            "extra": "iterations: 5039\ncpu: 138334.16054772105 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275871.54867948056,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 275848.4174221548 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 550970.3141279144,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 550919.4617206054 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.375672080512583,
            "unit": "ns/iter",
            "extra": "iterations: 27633222\ncpu: 25.374537395603014 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.69207524188869,
            "unit": "ns/iter",
            "extra": "iterations: 22019915\ncpu: 31.68919003547471 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 44.91540072658536,
            "unit": "ns/iter",
            "extra": "iterations: 15484211\ncpu: 44.91361613452573 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 69.0706052589382,
            "unit": "ns/iter",
            "extra": "iterations: 10140222\ncpu: 69.06470410608372 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 113.5397773774928,
            "unit": "ns/iter",
            "extra": "iterations: 6112859\ncpu: 113.5323031334437 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 206.77265980169616,
            "unit": "ns/iter",
            "extra": "iterations: 3222932\ncpu: 206.75455920261365 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 382.84739928537687,
            "unit": "ns/iter",
            "extra": "iterations: 1833150\ncpu: 382.82450263208193 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 747.2833122060305,
            "unit": "ns/iter",
            "extra": "iterations: 939543\ncpu: 747.2506590970285 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1464.1316036821524,
            "unit": "ns/iter",
            "extra": "iterations: 479827\ncpu: 1464.031861483412 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2891.3555473943056,
            "unit": "ns/iter",
            "extra": "iterations: 242339\ncpu: 2891.2847540016296 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5749.19830412383,
            "unit": "ns/iter",
            "extra": "iterations: 121707\ncpu: 5748.779618263562 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 203.87676109386723,
            "unit": "ns/iter",
            "extra": "iterations: 3431603\ncpu: 203.8719397319563 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 409.6940115400467,
            "unit": "ns/iter",
            "extra": "iterations: 1708486\ncpu: 409.65738788611685 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 820.1390044362238,
            "unit": "ns/iter",
            "extra": "iterations: 853426\ncpu: 820.1338838985455 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1571.1590327220354,
            "unit": "ns/iter",
            "extra": "iterations: 445663\ncpu: 1571.073809133812 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3106.699580998788,
            "unit": "ns/iter",
            "extra": "iterations: 225059\ncpu: 3106.640729764184 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6178.698920159128,
            "unit": "ns/iter",
            "extra": "iterations: 112887\ncpu: 6178.348614100826 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12319.393236680986,
            "unit": "ns/iter",
            "extra": "iterations: 56836\ncpu: 12318.38224012949 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24598.90111357038,
            "unit": "ns/iter",
            "extra": "iterations: 28467\ncpu: 24598.2825376751 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49291.1920022487,
            "unit": "ns/iter",
            "extra": "iterations: 14229\ncpu: 49289.37528990093 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98349.24905236441,
            "unit": "ns/iter",
            "extra": "iterations: 7123\ncpu: 98349.20581215805 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196683.72964626513,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 196667.69848399688 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.72408000870308,
            "unit": "ns/iter",
            "extra": "iterations: 26253944\ncpu: 26.723635199343885 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.63932575360254,
            "unit": "ns/iter",
            "extra": "iterations: 27328763\ncpu: 25.637465076630043 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 28.040855280153473,
            "unit": "ns/iter",
            "extra": "iterations: 25002521\ncpu: 28.039812625295056 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 33.53016033600833,
            "unit": "ns/iter",
            "extra": "iterations: 20767325\ncpu: 33.526351323533326 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 43.12714971043113,
            "unit": "ns/iter",
            "extra": "iterations: 16200147\ncpu: 43.12532768992802 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 64.64966513700568,
            "unit": "ns/iter",
            "extra": "iterations: 10831594\ncpu: 64.6432612780718 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 96.92188182832358,
            "unit": "ns/iter",
            "extra": "iterations: 7226334\ncpu: 96.92024725123417 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 160.94033059859237,
            "unit": "ns/iter",
            "extra": "iterations: 4346298\ncpu: 160.92829115721057 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.6072952408907,
            "unit": "ns/iter",
            "extra": "iterations: 2362691\ncpu: 296.6041204711054 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 541.5113033772823,
            "unit": "ns/iter",
            "extra": "iterations: 1295542\ncpu: 541.4554719183184 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1030.9320587693721,
            "unit": "ns/iter",
            "extra": "iterations: 678925\ncpu: 1030.9087984681616 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 629.1443527562478,
            "unit": "ns/iter",
            "extra": "iterations: 1107149\ncpu: 631.8714418731279 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 630.4456627982606,
            "unit": "ns/iter",
            "extra": "iterations: 1103038\ncpu: 633.2124496132232 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 629.9696413481561,
            "unit": "ns/iter",
            "extra": "iterations: 1105912\ncpu: 632.5278602647434 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 698.5502171996607,
            "unit": "ns/iter",
            "extra": "iterations: 992628\ncpu: 702.7261582403306 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 705.2264053637032,
            "unit": "ns/iter",
            "extra": "iterations: 991761\ncpu: 708.9937989065661 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 695.5086715070046,
            "unit": "ns/iter",
            "extra": "iterations: 999193\ncpu: 701.4988715862303 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 696.3390590905412,
            "unit": "ns/iter",
            "extra": "iterations: 1002312\ncpu: 702.0246280620257 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 711.9189017167902,
            "unit": "ns/iter",
            "extra": "iterations: 981735\ncpu: 712.2408898504763 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 761.6372404651955,
            "unit": "ns/iter",
            "extra": "iterations: 913109\ncpu: 764.4257761150667 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 797.9890848229871,
            "unit": "ns/iter",
            "extra": "iterations: 880333\ncpu: 801.9412949418393 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 825.7610262295676,
            "unit": "ns/iter",
            "extra": "iterations: 843988\ncpu: 829.8842530952 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 618.7348484966789,
            "unit": "ns/iter",
            "extra": "iterations: 1125549\ncpu: 620.268451218617 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 637.3938631149662,
            "unit": "ns/iter",
            "extra": "iterations: 1092900\ncpu: 641.9133662763912 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 649.0622968621968,
            "unit": "ns/iter",
            "extra": "iterations: 1088835\ncpu: 653.2296849321448 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 653.9797228167641,
            "unit": "ns/iter",
            "extra": "iterations: 1062327\ncpu: 658.2196479922198 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 681.4327357114064,
            "unit": "ns/iter",
            "extra": "iterations: 1017903\ncpu: 685.2363132769228 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 712.8567472377006,
            "unit": "ns/iter",
            "extra": "iterations: 980372\ncpu: 714.0483214440015 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 772.3323717805177,
            "unit": "ns/iter",
            "extra": "iterations: 908943\ncpu: 773.2796578038045 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 926.5687279880551,
            "unit": "ns/iter",
            "extra": "iterations: 772429\ncpu: 926.6082267775928 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1156.4870371236252,
            "unit": "ns/iter",
            "extra": "iterations: 604533\ncpu: 1156.8894650739494 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1652.175587322688,
            "unit": "ns/iter",
            "extra": "iterations: 425697\ncpu: 1652.534457617157 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2639.4758120554393,
            "unit": "ns/iter",
            "extra": "iterations: 265153\ncpu: 2640.060255755056 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 672.0983978740895,
            "unit": "ns/iter",
            "extra": "iterations: 1029819\ncpu: 680.4215925299806 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "25113de68aeae77beedc9a2c75b83a385db434f9",
          "message": "feat(core): add compile-time type_list utilities (#98)\n\nAdds a compile-time type_list facility with common operations to manipulate type sequences:\nsize, index_of (emits a compile-time error if type not found), contains, concat, fold-concat, unique, and filter.\nIncludes compile-time tests that verify positive behaviors and a negative test that ensures missing-index triggers a compile error.",
          "timestamp": "2025-11-21T02:49:20Z",
          "url": "https://github.com/3uclid3/ant/commit/25113de68aeae77beedc9a2c75b83a385db434f9"
        },
        "date": 1763695441648,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1158.2973370419766,
            "unit": "ns/iter",
            "extra": "iterations: 599599\ncpu: 1159.963577324233 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1676.423452384144,
            "unit": "ns/iter",
            "extra": "iterations: 416930\ncpu: 1678.0262753938778 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2711.2372041814724,
            "unit": "ns/iter",
            "extra": "iterations: 258014\ncpu: 2713.2060702131093 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 5026.056572678535,
            "unit": "ns/iter",
            "extra": "iterations: 141411\ncpu: 5029.322662310582 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9250.67110023479,
            "unit": "ns/iter",
            "extra": "iterations: 75710\ncpu: 9252.23695680865 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17847.821892733253,
            "unit": "ns/iter",
            "extra": "iterations: 39246\ncpu: 17847.611196045593 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35043.438528845974,
            "unit": "ns/iter",
            "extra": "iterations: 19985\ncpu: 35046.52174130808 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69435.26957049959,
            "unit": "ns/iter",
            "extra": "iterations: 10079\ncpu: 69436.28921519645 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138231.85048402514,
            "unit": "ns/iter",
            "extra": "iterations: 5063\ncpu: 138229.836460596 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 278935.52305870515,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 278938.64327945426 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 553609.7749803305,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 553564.9929189389 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.403909913688906,
            "unit": "ns/iter",
            "extra": "iterations: 27595136\ncpu: 25.402395262701344 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 32.519066599208884,
            "unit": "ns/iter",
            "extra": "iterations: 21607524\ncpu: 32.51605033505919 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.70747692844107,
            "unit": "ns/iter",
            "extra": "iterations: 15314310\ncpu: 45.706373777205876 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 73.03565713097161,
            "unit": "ns/iter",
            "extra": "iterations: 9577383\ncpu: 73.02971281403285 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 117.94409710189417,
            "unit": "ns/iter",
            "extra": "iterations: 5935703\ncpu: 117.9333952524241 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 207.35447507530986,
            "unit": "ns/iter",
            "extra": "iterations: 3367083\ncpu: 207.3459775122864 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 386.0809761958349,
            "unit": "ns/iter",
            "extra": "iterations: 1812792\ncpu: 386.06083102749693 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 745.7976322037323,
            "unit": "ns/iter",
            "extra": "iterations: 939270\ncpu: 745.7710413406163 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1457.0615567770667,
            "unit": "ns/iter",
            "extra": "iterations: 480467\ncpu: 1457.0116428391573 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2885.90523212722,
            "unit": "ns/iter",
            "extra": "iterations: 241527\ncpu: 2885.81479089294 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5742.633649374721,
            "unit": "ns/iter",
            "extra": "iterations: 121714\ncpu: 5742.193782145018 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 204.22584680310248,
            "unit": "ns/iter",
            "extra": "iterations: 3431140\ncpu: 204.2185687555735 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 411.0108094490359,
            "unit": "ns/iter",
            "extra": "iterations: 1702862\ncpu: 410.99223131410406 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 818.755241503486,
            "unit": "ns/iter",
            "extra": "iterations: 855909\ncpu: 818.7240068745642 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1575.1188089622672,
            "unit": "ns/iter",
            "extra": "iterations: 444352\ncpu: 1574.919590774879 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3110.366863352424,
            "unit": "ns/iter",
            "extra": "iterations: 224724\ncpu: 3110.2009487193104 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6181.204251819498,
            "unit": "ns/iter",
            "extra": "iterations: 113081\ncpu: 6180.761480708522 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12335.241960452975,
            "unit": "ns/iter",
            "extra": "iterations: 56844\ncpu: 12334.1311835902 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24617.13712998481,
            "unit": "ns/iter",
            "extra": "iterations: 28411\ncpu: 24616.158565344296 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49253.70153348371,
            "unit": "ns/iter",
            "extra": "iterations: 14216\ncpu: 49249.95744231867 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98388.38974719227,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 98384.41938202253 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 198263.23883113585,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 198252.70637819567 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.58918289550304,
            "unit": "ns/iter",
            "extra": "iterations: 26344721\ncpu: 26.587871019776603 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.752762341025925,
            "unit": "ns/iter",
            "extra": "iterations: 27220752\ncpu: 25.75005929299811 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 27.75456330221451,
            "unit": "ns/iter",
            "extra": "iterations: 25280103\ncpu: 27.75228839059735 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 33.215467044658,
            "unit": "ns/iter",
            "extra": "iterations: 21085489\ncpu: 33.211740737907604 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 42.768949726796755,
            "unit": "ns/iter",
            "extra": "iterations: 16355592\ncpu: 42.76415735975812 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 64.12141626188932,
            "unit": "ns/iter",
            "extra": "iterations: 10918941\ncpu: 64.1159224140872 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 96.69687160851132,
            "unit": "ns/iter",
            "extra": "iterations: 7245161\ncpu: 96.69031095375252 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 159.87034490219162,
            "unit": "ns/iter",
            "extra": "iterations: 4381648\ncpu: 159.85265543923146 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 298.3872953058166,
            "unit": "ns/iter",
            "extra": "iterations: 2352595\ncpu: 298.3618871926524 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 541.9350963395519,
            "unit": "ns/iter",
            "extra": "iterations: 1294380\ncpu: 541.8945896877239 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1030.0710959640464,
            "unit": "ns/iter",
            "extra": "iterations: 679265\ncpu: 1029.9788815852444 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 629.98460847631,
            "unit": "ns/iter",
            "extra": "iterations: 1113405\ncpu: 629.0279628675936 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 630.2572369069021,
            "unit": "ns/iter",
            "extra": "iterations: 1113460\ncpu: 629.1293292966114 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 628.9220951385785,
            "unit": "ns/iter",
            "extra": "iterations: 1112408\ncpu: 629.8161214255704 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 674.9468614672392,
            "unit": "ns/iter",
            "extra": "iterations: 1031511\ncpu: 678.9782154499212 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 685.8429433176688,
            "unit": "ns/iter",
            "extra": "iterations: 1027126\ncpu: 689.9071175281299 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 677.6622185823335,
            "unit": "ns/iter",
            "extra": "iterations: 1026436\ncpu: 681.6775717161952 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 681.1393771282251,
            "unit": "ns/iter",
            "extra": "iterations: 1021136\ncpu: 684.9109922675111 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 687.838352523734,
            "unit": "ns/iter",
            "extra": "iterations: 1022113\ncpu: 692.4451914795468 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 739.5361642771021,
            "unit": "ns/iter",
            "extra": "iterations: 942118\ncpu: 743.3590887771622 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 772.4520355386867,
            "unit": "ns/iter",
            "extra": "iterations: 903836\ncpu: 776.8816898185391 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 800.3784253752176,
            "unit": "ns/iter",
            "extra": "iterations: 867825\ncpu: 806.6852245589275 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 618.2818186451291,
            "unit": "ns/iter",
            "extra": "iterations: 1128403\ncpu: 620.5225952089812 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 636.5433764032031,
            "unit": "ns/iter",
            "extra": "iterations: 1098362\ncpu: 637.9081186383264 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 640.4432291662918,
            "unit": "ns/iter",
            "extra": "iterations: 1090181\ncpu: 642.4456049085625 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 652.9739897445114,
            "unit": "ns/iter",
            "extra": "iterations: 1068848\ncpu: 654.5590645262314 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 683.1780950664831,
            "unit": "ns/iter",
            "extra": "iterations: 1030169\ncpu: 684.7106348509858 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 713.9519493180436,
            "unit": "ns/iter",
            "extra": "iterations: 975283\ncpu: 715.529185891296 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 778.8120286866487,
            "unit": "ns/iter",
            "extra": "iterations: 901744\ncpu: 780.0765405718166 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 911.9109306991319,
            "unit": "ns/iter",
            "extra": "iterations: 767234\ncpu: 913.5030316705395 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1160.7500788502944,
            "unit": "ns/iter",
            "extra": "iterations: 602234\ncpu: 1162.65021403256 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1654.8255863290517,
            "unit": "ns/iter",
            "extra": "iterations: 423476\ncpu: 1656.3803308645422 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2635.812223035639,
            "unit": "ns/iter",
            "extra": "iterations: 265432\ncpu: 2637.208294397097 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 663.5606595020706,
            "unit": "ns/iter",
            "extra": "iterations: 1052020\ncpu: 666.4075711470298 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d14bf444babfe0f2531fda703200eb2d7a5489bd",
          "message": "feat(database)!: add typed env wrapper and refactor env registry (#99)\n\nIntroduce a typed, signature-driven environment handle and refactor the underlying registry into an internal env_registry. This provides safer, compile-time-checked access to singleton-like environment components (required vs optional), and separates the public API from the internal storage implementation.\n\nWhy:\n- Enforces signature constraints for env access (required vs optional components).\n- Improves encapsulation by moving storage details into a detail::env_registry.\n- Simplifies system usage by replacing the old env_var decorator with a clearer env interface.\n- Updates docs and tests to reflect the new API and guards incorrect usage via compile tests.\n\nNotes:\n- Updated documentation and example signatures.\n- Added unit tests for the new registry and env behavior, plus compile-fail tests for invalid usages.\n- Breaking change: public env API and some types were renamed/changed; callers must migrate to the new signature-based env and the internal registry type.",
          "timestamp": "2025-11-21T04:10:57Z",
          "url": "https://github.com/3uclid3/ant/commit/d14bf444babfe0f2531fda703200eb2d7a5489bd"
        },
        "date": 1763781657636,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1154.666601619844,
            "unit": "ns/iter",
            "extra": "iterations: 604847\ncpu: 1156.8870144020389 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1680.928464346989,
            "unit": "ns/iter",
            "extra": "iterations: 417624\ncpu: 1683.2292947725264 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2708.7148838007342,
            "unit": "ns/iter",
            "extra": "iterations: 255594\ncpu: 2710.356843274933 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4938.314274556201,
            "unit": "ns/iter",
            "extra": "iterations: 141265\ncpu: 4939.369907619216 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9239.393456880065,
            "unit": "ns/iter",
            "extra": "iterations: 75805\ncpu: 9240.110401689824 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17837.10951508847,
            "unit": "ns/iter",
            "extra": "iterations: 39264\ncpu: 17837.42433272131 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35041.36944780815,
            "unit": "ns/iter",
            "extra": "iterations: 19992\ncpu: 35041.43177270992 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69415.47867065533,
            "unit": "ns/iter",
            "extra": "iterations: 10080\ncpu: 69419.6932539703 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138167.93404429732,
            "unit": "ns/iter",
            "extra": "iterations: 5064\ncpu: 138167.95853079544 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275594.5764982648,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 275600.5169558557 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 563209.7446470675,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 563143.8104678717 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.36265437254447,
            "unit": "ns/iter",
            "extra": "iterations: 27567645\ncpu: 25.361361480097408 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 32.1000497557284,
            "unit": "ns/iter",
            "extra": "iterations: 21820603\ncpu: 32.09725189537615 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.55755674006928,
            "unit": "ns/iter",
            "extra": "iterations: 15443187\ncpu: 45.55411729457139 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 70.03070262332955,
            "unit": "ns/iter",
            "extra": "iterations: 9983870\ncpu: 70.02298817993422 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 114.40646803507956,
            "unit": "ns/iter",
            "extra": "iterations: 6121148\ncpu: 114.39854223423457 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.5236467694452,
            "unit": "ns/iter",
            "extra": "iterations: 3421165\ncpu: 204.50276528609422 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 382.44128837591796,
            "unit": "ns/iter",
            "extra": "iterations: 1706800\ncpu: 382.4156462385739 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 744.3883274697943,
            "unit": "ns/iter",
            "extra": "iterations: 940276\ncpu: 744.3022474252266 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1457.9399468626123,
            "unit": "ns/iter",
            "extra": "iterations: 480641\ncpu: 1457.7874193004732 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2890.0769304024034,
            "unit": "ns/iter",
            "extra": "iterations: 241517\ncpu: 2889.7357494503517 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5770.4449287854495,
            "unit": "ns/iter",
            "extra": "iterations: 121815\ncpu: 5770.153708492377 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 203.96095783946586,
            "unit": "ns/iter",
            "extra": "iterations: 3431598\ncpu: 203.94954537215565 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 410.1625244517048,
            "unit": "ns/iter",
            "extra": "iterations: 1706937\ncpu: 410.133217570421 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 818.6057170599408,
            "unit": "ns/iter",
            "extra": "iterations: 854810\ncpu: 818.5414583357705 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1572.9192704533707,
            "unit": "ns/iter",
            "extra": "iterations: 445537\ncpu: 1572.7412156566184 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3113.7382209648754,
            "unit": "ns/iter",
            "extra": "iterations: 225167\ncpu: 3113.4691939760214 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6178.7851059701,
            "unit": "ns/iter",
            "extra": "iterations: 113428\ncpu: 6177.94877807949 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12316.02803738298,
            "unit": "ns/iter",
            "extra": "iterations: 56710\ncpu: 12315.086457414935 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24601.120843585217,
            "unit": "ns/iter",
            "extra": "iterations: 28450\ncpu: 24598.78920913883 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49337.62533370692,
            "unit": "ns/iter",
            "extra": "iterations: 14234\ncpu: 49334.78734017136 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98337.90736575575,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 98326.75133539492 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 197108.34222346742,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 197081.19848399746 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.429266307415286,
            "unit": "ns/iter",
            "extra": "iterations: 26473063\ncpu: 26.426835232477654 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.645166485758327,
            "unit": "ns/iter",
            "extra": "iterations: 27313057\ncpu: 25.644528658948882 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 27.63806641754894,
            "unit": "ns/iter",
            "extra": "iterations: 25343031\ncpu: 27.635308144475623 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 33.246655811031815,
            "unit": "ns/iter",
            "extra": "iterations: 21097492\ncpu: 33.24527375102219 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 42.60695949383813,
            "unit": "ns/iter",
            "extra": "iterations: 16438092\ncpu: 42.60423898345383 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 64.82339366409637,
            "unit": "ns/iter",
            "extra": "iterations: 10955881\ncpu: 64.82051283689529 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 96.74776909521603,
            "unit": "ns/iter",
            "extra": "iterations: 7247732\ncpu: 96.74125022834679 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 159.86600688285685,
            "unit": "ns/iter",
            "extra": "iterations: 4381031\ncpu: 159.85708683640863 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.16298780869437,
            "unit": "ns/iter",
            "extra": "iterations: 2363324\ncpu: 296.14045217668166 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 542.4958395958952,
            "unit": "ns/iter",
            "extra": "iterations: 1290740\ncpu: 542.448959511599 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1029.602919223482,
            "unit": "ns/iter",
            "extra": "iterations: 677920\ncpu: 1029.5487786169533 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 630.6247963599409,
            "unit": "ns/iter",
            "extra": "iterations: 1112252\ncpu: 629.782982632508 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 630.2830150552638,
            "unit": "ns/iter",
            "extra": "iterations: 1103807\ncpu: 629.3492105066583 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 631.3205191898875,
            "unit": "ns/iter",
            "extra": "iterations: 1112520\ncpu: 630.7438877483286 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 675.7611443401762,
            "unit": "ns/iter",
            "extra": "iterations: 1031263\ncpu: 679.6633254554835 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 679.9120798485019,
            "unit": "ns/iter",
            "extra": "iterations: 1027523\ncpu: 681.8667981140642 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 679.1183357400961,
            "unit": "ns/iter",
            "extra": "iterations: 1029089\ncpu: 683.0096988665036 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 680.9791987507878,
            "unit": "ns/iter",
            "extra": "iterations: 1025371\ncpu: 684.4724992203182 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 682.7255651992292,
            "unit": "ns/iter",
            "extra": "iterations: 1020133\ncpu: 686.1358734606463 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 745.3999530980628,
            "unit": "ns/iter",
            "extra": "iterations: 933802\ncpu: 747.3664170745669 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 776.2999642264571,
            "unit": "ns/iter",
            "extra": "iterations: 900454\ncpu: 777.8635543821381 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 801.8320345918772,
            "unit": "ns/iter",
            "extra": "iterations: 874049\ncpu: 804.5991014256343 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 617.8342604865794,
            "unit": "ns/iter",
            "extra": "iterations: 1130871\ncpu: 619.6842858286886 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 635.5117106655106,
            "unit": "ns/iter",
            "extra": "iterations: 1096692\ncpu: 638.2700603292259 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 640.2139904279609,
            "unit": "ns/iter",
            "extra": "iterations: 1086759\ncpu: 643.0016240898657 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 652.4832535212022,
            "unit": "ns/iter",
            "extra": "iterations: 1068673\ncpu: 655.115246664243 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 676.6414199780393,
            "unit": "ns/iter",
            "extra": "iterations: 1030247\ncpu: 679.5564209328919 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 711.8681115507603,
            "unit": "ns/iter",
            "extra": "iterations: 981663\ncpu: 714.570432015928 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 774.1397565417404,
            "unit": "ns/iter",
            "extra": "iterations: 900695\ncpu: 776.9690405716807 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 908.5587479337314,
            "unit": "ns/iter",
            "extra": "iterations: 767627\ncpu: 910.9182845358918 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1156.4773224985088,
            "unit": "ns/iter",
            "extra": "iterations: 604851\ncpu: 1159.2706269832559 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1653.8332982825095,
            "unit": "ns/iter",
            "extra": "iterations: 423721\ncpu: 1656.0265386920883 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2628.8671631481575,
            "unit": "ns/iter",
            "extra": "iterations: 266131\ncpu: 2632.049407989004 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 665.3719680913798,
            "unit": "ns/iter",
            "extra": "iterations: 1039401\ncpu: 672.7005005810953 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d14bf444babfe0f2531fda703200eb2d7a5489bd",
          "message": "feat(database)!: add typed env wrapper and refactor env registry (#99)\n\nIntroduce a typed, signature-driven environment handle and refactor the underlying registry into an internal env_registry. This provides safer, compile-time-checked access to singleton-like environment components (required vs optional), and separates the public API from the internal storage implementation.\n\nWhy:\n- Enforces signature constraints for env access (required vs optional components).\n- Improves encapsulation by moving storage details into a detail::env_registry.\n- Simplifies system usage by replacing the old env_var decorator with a clearer env interface.\n- Updates docs and tests to reflect the new API and guards incorrect usage via compile tests.\n\nNotes:\n- Updated documentation and example signatures.\n- Added unit tests for the new registry and env behavior, plus compile-fail tests for invalid usages.\n- Breaking change: public env API and some types were renamed/changed; callers must migrate to the new signature-based env and the internal registry type.",
          "timestamp": "2025-11-21T04:10:57Z",
          "url": "https://github.com/3uclid3/ant/commit/d14bf444babfe0f2531fda703200eb2d7a5489bd"
        },
        "date": 1763868789595,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1155.9539729268563,
            "unit": "ns/iter",
            "extra": "iterations: 605687\ncpu: 1157.929863114082 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1671.118106824751,
            "unit": "ns/iter",
            "extra": "iterations: 418384\ncpu: 1673.668574802117 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2704.859130132463,
            "unit": "ns/iter",
            "extra": "iterations: 258359\ncpu: 2707.086677839759 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 5003.890809943385,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5008.735999999368 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9238.768082437278,
            "unit": "ns/iter",
            "extra": "iterations: 75764\ncpu: 9240.372406418792 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17842.21140474833,
            "unit": "ns/iter",
            "extra": "iterations: 39124\ncpu: 17844.571107247346 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35212.21405691193,
            "unit": "ns/iter",
            "extra": "iterations: 19976\ncpu: 35214.34506407561 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69456.76172061398,
            "unit": "ns/iter",
            "extra": "iterations: 10089\ncpu: 69462.21865398133 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138419.98376015588,
            "unit": "ns/iter",
            "extra": "iterations: 4803\ncpu: 138437.12075785155 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 276206.798975243,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 276215.2526606457 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 551084.3370167612,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 551083.2501972982 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.39367750057576,
            "unit": "ns/iter",
            "extra": "iterations: 27563150\ncpu: 25.392466644777574 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.670873566061402,
            "unit": "ns/iter",
            "extra": "iterations: 22074690\ncpu: 31.669566956546124 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.20446918585273,
            "unit": "ns/iter",
            "extra": "iterations: 15496648\ncpu: 45.20215462079282 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 69.95439028482292,
            "unit": "ns/iter",
            "extra": "iterations: 9989648\ncpu: 69.9506054667791 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 114.35864282054942,
            "unit": "ns/iter",
            "extra": "iterations: 6133102\ncpu: 114.34898294533497 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 205.81761727001737,
            "unit": "ns/iter",
            "extra": "iterations: 3428647\ncpu: 205.79412082958657 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 383.5295115158232,
            "unit": "ns/iter",
            "extra": "iterations: 1830438\ncpu: 383.4819458512104 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 754.4301583143891,
            "unit": "ns/iter",
            "extra": "iterations: 942997\ncpu: 754.3568187385562 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1461.1790099537848,
            "unit": "ns/iter",
            "extra": "iterations: 480018\ncpu: 1461.0350799345083 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2890.871774636708,
            "unit": "ns/iter",
            "extra": "iterations: 242027\ncpu: 2890.519371805613 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5747.566514327061,
            "unit": "ns/iter",
            "extra": "iterations: 121658\ncpu: 5747.266838185745 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 204.02090514507563,
            "unit": "ns/iter",
            "extra": "iterations: 3429395\ncpu: 204.0078696096541 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 410.7216968497553,
            "unit": "ns/iter",
            "extra": "iterations: 1709898\ncpu: 410.7028928041322 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 821.2606358352922,
            "unit": "ns/iter",
            "extra": "iterations: 851038\ncpu: 821.2250639806903 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1572.5473799258837,
            "unit": "ns/iter",
            "extra": "iterations: 445579\ncpu: 1572.4597860312065 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3106.747736592609,
            "unit": "ns/iter",
            "extra": "iterations: 225324\ncpu: 3106.5847180060637 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6193.21094011964,
            "unit": "ns/iter",
            "extra": "iterations: 113326\ncpu: 6192.55714487408 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12326.75965431056,
            "unit": "ns/iter",
            "extra": "iterations: 56814\ncpu: 12325.022072024496 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24618.619831223732,
            "unit": "ns/iter",
            "extra": "iterations: 28440\ncpu: 24616.22710970464 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49282.30385885997,
            "unit": "ns/iter",
            "extra": "iterations: 14227\ncpu: 49279.91080340206 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98538.38831132265,
            "unit": "ns/iter",
            "extra": "iterations: 7118\ncpu: 98529.07277325103 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196809.60853692878,
            "unit": "ns/iter",
            "extra": "iterations: 3561\ncpu: 196792.32238135388 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.68409575474078,
            "unit": "ns/iter",
            "extra": "iterations: 26310384\ncpu: 26.681749000698595 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.855461128194097,
            "unit": "ns/iter",
            "extra": "iterations: 27104079\ncpu: 25.852589383317518 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 28.19304487069048,
            "unit": "ns/iter",
            "extra": "iterations: 24909846\ncpu: 28.19025886390464 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 34.08019729919349,
            "unit": "ns/iter",
            "extra": "iterations: 20589035\ncpu: 34.0786277744441 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 43.090041659748444,
            "unit": "ns/iter",
            "extra": "iterations: 16207731\ncpu: 43.086342252348935 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 64.6945654981454,
            "unit": "ns/iter",
            "extra": "iterations: 10828757\ncpu: 64.69019823789587 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 97.17816237511052,
            "unit": "ns/iter",
            "extra": "iterations: 7201818\ncpu: 97.17132326865301 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 160.26877845484714,
            "unit": "ns/iter",
            "extra": "iterations: 4371619\ncpu: 160.26114535598822 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.8264763131449,
            "unit": "ns/iter",
            "extra": "iterations: 2358629\ncpu: 296.8101685343496 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 540.490735070634,
            "unit": "ns/iter",
            "extra": "iterations: 1291699\ncpu: 540.4673720425577 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1031.9064790041434,
            "unit": "ns/iter",
            "extra": "iterations: 675752\ncpu: 1031.8388151274503 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 631.4824611937781,
            "unit": "ns/iter",
            "extra": "iterations: 1112562\ncpu: 629.8463555289076 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 632.3496086985275,
            "unit": "ns/iter",
            "extra": "iterations: 1110410\ncpu: 630.9586981371514 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 634.0086262343054,
            "unit": "ns/iter",
            "extra": "iterations: 1109291\ncpu: 632.7074356498881 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 679.4061261356954,
            "unit": "ns/iter",
            "extra": "iterations: 1031091\ncpu: 682.574078331022 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 679.2507741079264,
            "unit": "ns/iter",
            "extra": "iterations: 1029895\ncpu: 682.3435330758264 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 680.2004989273956,
            "unit": "ns/iter",
            "extra": "iterations: 1023392\ncpu: 683.7036619408767 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 682.5051304682815,
            "unit": "ns/iter",
            "extra": "iterations: 1020081\ncpu: 686.0619440953334 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 690.2253452874264,
            "unit": "ns/iter",
            "extra": "iterations: 1011550\ncpu: 693.4213869808682 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 741.5923054746341,
            "unit": "ns/iter",
            "extra": "iterations: 945242\ncpu: 743.5222937623463 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 774.8568515168885,
            "unit": "ns/iter",
            "extra": "iterations: 904201\ncpu: 776.7995335080914 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 803.5770546137528,
            "unit": "ns/iter",
            "extra": "iterations: 871356\ncpu: 807.1234765077187 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 619.5570035844227,
            "unit": "ns/iter",
            "extra": "iterations: 1132657\ncpu: 620.9386892971684 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 633.3199825600005,
            "unit": "ns/iter",
            "extra": "iterations: 1104082\ncpu: 634.8792535364001 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 639.0536740701763,
            "unit": "ns/iter",
            "extra": "iterations: 1092073\ncpu: 640.4281316342257 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 652.1987852399327,
            "unit": "ns/iter",
            "extra": "iterations: 1070502\ncpu: 653.4988080439566 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 675.817446285241,
            "unit": "ns/iter",
            "extra": "iterations: 1034134\ncpu: 677.4513061136738 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 708.9087083645718,
            "unit": "ns/iter",
            "extra": "iterations: 980966\ncpu: 710.4891953537241 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 771.7635295345588,
            "unit": "ns/iter",
            "extra": "iterations: 902265\ncpu: 773.1345602444944 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 906.0608082218082,
            "unit": "ns/iter",
            "extra": "iterations: 771343\ncpu: 907.2599686514235 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1153.694292909542,
            "unit": "ns/iter",
            "extra": "iterations: 604317\ncpu: 1154.7313347089944 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1646.8349710903387,
            "unit": "ns/iter",
            "extra": "iterations: 424265\ncpu: 1647.790072249479 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2634.495897169414,
            "unit": "ns/iter",
            "extra": "iterations: 266156\ncpu: 2635.430574541032 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 667.655029841885,
            "unit": "ns/iter",
            "extra": "iterations: 1034646\ncpu: 677.8334009827456 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d14bf444babfe0f2531fda703200eb2d7a5489bd",
          "message": "feat(database)!: add typed env wrapper and refactor env registry (#99)\n\nIntroduce a typed, signature-driven environment handle and refactor the underlying registry into an internal env_registry. This provides safer, compile-time-checked access to singleton-like environment components (required vs optional), and separates the public API from the internal storage implementation.\n\nWhy:\n- Enforces signature constraints for env access (required vs optional components).\n- Improves encapsulation by moving storage details into a detail::env_registry.\n- Simplifies system usage by replacing the old env_var decorator with a clearer env interface.\n- Updates docs and tests to reflect the new API and guards incorrect usage via compile tests.\n\nNotes:\n- Updated documentation and example signatures.\n- Added unit tests for the new registry and env behavior, plus compile-fail tests for invalid usages.\n- Breaking change: public env API and some types were renamed/changed; callers must migrate to the new signature-based env and the internal registry type.",
          "timestamp": "2025-11-21T04:10:57Z",
          "url": "https://github.com/3uclid3/ant/commit/d14bf444babfe0f2531fda703200eb2d7a5489bd"
        },
        "date": 1763955158787,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1158.0729295001925,
            "unit": "ns/iter",
            "extra": "iterations: 605009\ncpu: 1158.4002799957657 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1681.5754731029651,
            "unit": "ns/iter",
            "extra": "iterations: 417778\ncpu: 1681.631644079088 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2707.623219483734,
            "unit": "ns/iter",
            "extra": "iterations: 257930\ncpu: 2708.812538285257 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4936.969320748697,
            "unit": "ns/iter",
            "extra": "iterations: 141757\ncpu: 4937.110823452042 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9237.17617908231,
            "unit": "ns/iter",
            "extra": "iterations: 75866\ncpu: 9238.59880578878 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17847.016975932496,
            "unit": "ns/iter",
            "extra": "iterations: 39232\ncpu: 17847.490084625602 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35022.697250448364,
            "unit": "ns/iter",
            "extra": "iterations: 19967\ncpu: 35022.8087844955 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69421.62047420425,
            "unit": "ns/iter",
            "extra": "iterations: 10081\ncpu: 69424.17994247128 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138554.56660083722,
            "unit": "ns/iter",
            "extra": "iterations: 5060\ncpu: 138502.46027668484 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275898.84272771684,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 275880.86243593943 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 550911.2118110155,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 550896.3212598347 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.295699559243257,
            "unit": "ns/iter",
            "extra": "iterations: 27656514\ncpu: 25.2944945266782 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.77355051436953,
            "unit": "ns/iter",
            "extra": "iterations: 22038818\ncpu: 31.77126990204283 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 46.00176905429456,
            "unit": "ns/iter",
            "extra": "iterations: 15245999\ncpu: 45.99863485495447 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 70.7035338554658,
            "unit": "ns/iter",
            "extra": "iterations: 9942427\ncpu: 70.69900840106743 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 117.83651558167534,
            "unit": "ns/iter",
            "extra": "iterations: 6092862\ncpu: 117.83131441348927 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.688323356613,
            "unit": "ns/iter",
            "extra": "iterations: 3426978\ncpu: 204.68067492700592 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 382.82519510487896,
            "unit": "ns/iter",
            "extra": "iterations: 1829657\ncpu: 382.8121910281545 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 745.22508827534,
            "unit": "ns/iter",
            "extra": "iterations: 940240\ncpu: 745.1734418871804 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1459.8437659911858,
            "unit": "ns/iter",
            "extra": "iterations: 480734\ncpu: 1459.6866208755812 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2898.756787409645,
            "unit": "ns/iter",
            "extra": "iterations: 242471\ncpu: 2898.4605457972184 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5744.4376360068745,
            "unit": "ns/iter",
            "extra": "iterations: 121777\ncpu: 5744.181963753404 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 203.8709673660016,
            "unit": "ns/iter",
            "extra": "iterations: 3432310\ncpu: 203.854117489388 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 410.7236709794932,
            "unit": "ns/iter",
            "extra": "iterations: 1704526\ncpu: 410.70796104019536 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 819.9329474791213,
            "unit": "ns/iter",
            "extra": "iterations: 845397\ncpu: 819.871364577823 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1575.5255489403712,
            "unit": "ns/iter",
            "extra": "iterations: 444265\ncpu: 1575.4779917391668 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3118.1365068222594,
            "unit": "ns/iter",
            "extra": "iterations: 225073\ncpu: 3117.8927681241225 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6186.160176295525,
            "unit": "ns/iter",
            "extra": "iterations: 113219\ncpu: 6185.745431420499 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12328.844174133486,
            "unit": "ns/iter",
            "extra": "iterations: 56807\ncpu: 12328.32159769042 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24725.085290177034,
            "unit": "ns/iter",
            "extra": "iterations: 28362\ncpu: 24722.69829349124 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49204.65612259235,
            "unit": "ns/iter",
            "extra": "iterations: 14226\ncpu: 49202.08175172213 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98465.08119117869,
            "unit": "ns/iter",
            "extra": "iterations: 7119\ncpu: 98455.44683242026 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196678.04154969333,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 196672.7720381808 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.836505548251623,
            "unit": "ns/iter",
            "extra": "iterations: 26110568\ncpu: 26.83525053916869 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 26.005972069105905,
            "unit": "ns/iter",
            "extra": "iterations: 26933044\ncpu: 26.00585652331013 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 28.728709177338274,
            "unit": "ns/iter",
            "extra": "iterations: 24492830\ncpu: 28.727012354227778 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 33.25238825820639,
            "unit": "ns/iter",
            "extra": "iterations: 21044521\ncpu: 33.25188309109074 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 42.802742871344165,
            "unit": "ns/iter",
            "extra": "iterations: 16353082\ncpu: 42.80163372262214 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 64.12693334090604,
            "unit": "ns/iter",
            "extra": "iterations: 10915690\ncpu: 64.12591608959211 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 96.74204936608432,
            "unit": "ns/iter",
            "extra": "iterations: 7245177\ncpu: 96.736410442423 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 160.79072843389338,
            "unit": "ns/iter",
            "extra": "iterations: 4381331\ncpu: 160.78587922254738 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.7221551642584,
            "unit": "ns/iter",
            "extra": "iterations: 2356999\ncpu: 296.7054631758424 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 541.4544629205666,
            "unit": "ns/iter",
            "extra": "iterations: 1283218\ncpu: 541.4253525121999 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1031.1305185023734,
            "unit": "ns/iter",
            "extra": "iterations: 679804\ncpu: 1031.0397526345853 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 629.2037706829067,
            "unit": "ns/iter",
            "extra": "iterations: 1114120\ncpu: 628.7720855879982 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 628.7906980959359,
            "unit": "ns/iter",
            "extra": "iterations: 1116072\ncpu: 627.9823004219336 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 628.51205990357,
            "unit": "ns/iter",
            "extra": "iterations: 1114188\ncpu: 628.1150209829541 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 677.1788364833328,
            "unit": "ns/iter",
            "extra": "iterations: 1024103\ncpu: 682.7473271744877 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 680.8789176180954,
            "unit": "ns/iter",
            "extra": "iterations: 1022717\ncpu: 686.4279179876544 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 679.6505712426424,
            "unit": "ns/iter",
            "extra": "iterations: 1022735\ncpu: 685.3236566646136 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 683.7500449501159,
            "unit": "ns/iter",
            "extra": "iterations: 1017827\ncpu: 685.1348991509707 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 683.6875469201042,
            "unit": "ns/iter",
            "extra": "iterations: 1025642\ncpu: 682.8430982716621 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 739.7844996227326,
            "unit": "ns/iter",
            "extra": "iterations: 947140\ncpu: 739.0801127620296 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 771.8569803858859,
            "unit": "ns/iter",
            "extra": "iterations: 909260\ncpu: 770.4575083028902 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 796.3652833638157,
            "unit": "ns/iter",
            "extra": "iterations: 875263\ncpu: 802.7096198492313 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 619.9813639573421,
            "unit": "ns/iter",
            "extra": "iterations: 1122394\ncpu: 623.7270414844195 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 635.0064739193981,
            "unit": "ns/iter",
            "extra": "iterations: 1096398\ncpu: 638.7356142559217 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 639.8256062927833,
            "unit": "ns/iter",
            "extra": "iterations: 1089225\ncpu: 643.6520333274498 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 651.5190528240521,
            "unit": "ns/iter",
            "extra": "iterations: 1067899\ncpu: 655.2870599262474 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 675.7860332982499,
            "unit": "ns/iter",
            "extra": "iterations: 1034619\ncpu: 679.7104779651481 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 709.2587407357508,
            "unit": "ns/iter",
            "extra": "iterations: 981210\ncpu: 712.8374517210289 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 771.1548593151182,
            "unit": "ns/iter",
            "extra": "iterations: 899623\ncpu: 774.9121443099235 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 909.7357400138143,
            "unit": "ns/iter",
            "extra": "iterations: 764921\ncpu: 913.1718321255782 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1158.0236952522373,
            "unit": "ns/iter",
            "extra": "iterations: 604889\ncpu: 1161.4227486380232 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1648.2656851561246,
            "unit": "ns/iter",
            "extra": "iterations: 425880\ncpu: 1652.006802373019 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2625.7399931976734,
            "unit": "ns/iter",
            "extra": "iterations: 265543\ncpu: 2629.6762972466 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 667.3729440765209,
            "unit": "ns/iter",
            "extra": "iterations: 1037858\ncpu: 674.9506184770692 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d14bf444babfe0f2531fda703200eb2d7a5489bd",
          "message": "feat(database)!: add typed env wrapper and refactor env registry (#99)\n\nIntroduce a typed, signature-driven environment handle and refactor the underlying registry into an internal env_registry. This provides safer, compile-time-checked access to singleton-like environment components (required vs optional), and separates the public API from the internal storage implementation.\n\nWhy:\n- Enforces signature constraints for env access (required vs optional components).\n- Improves encapsulation by moving storage details into a detail::env_registry.\n- Simplifies system usage by replacing the old env_var decorator with a clearer env interface.\n- Updates docs and tests to reflect the new API and guards incorrect usage via compile tests.\n\nNotes:\n- Updated documentation and example signatures.\n- Added unit tests for the new registry and env behavior, plus compile-fail tests for invalid usages.\n- Breaking change: public env API and some types were renamed/changed; callers must migrate to the new signature-based env and the internal registry type.",
          "timestamp": "2025-11-21T04:10:57Z",
          "url": "https://github.com/3uclid3/ant/commit/d14bf444babfe0f2531fda703200eb2d7a5489bd"
        },
        "date": 1764041185258,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1165.6068464276677,
            "unit": "ns/iter",
            "extra": "iterations: 599028\ncpu: 1166.6801067729666 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1680.1859675640012,
            "unit": "ns/iter",
            "extra": "iterations: 413884\ncpu: 1681.2506813502944 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2714.151214099383,
            "unit": "ns/iter",
            "extra": "iterations: 258091\ncpu: 2714.6730378045636 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4950.318881588989,
            "unit": "ns/iter",
            "extra": "iterations: 141413\ncpu: 4952.195349791299 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9238.583680933598,
            "unit": "ns/iter",
            "extra": "iterations: 75764\ncpu: 9238.357834854827 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17837.453434974188,
            "unit": "ns/iter",
            "extra": "iterations: 39214\ncpu: 17834.875223136347 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35022.46750124269,
            "unit": "ns/iter",
            "extra": "iterations: 19970\ncpu: 35016.62949424348 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69387.09601030356,
            "unit": "ns/iter",
            "extra": "iterations: 10051\ncpu: 69385.21390906781 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138815.00177618957,
            "unit": "ns/iter",
            "extra": "iterations: 5067\ncpu: 138817.2855733152 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 275981.7090550296,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 275960.32834644057 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 551217.2970845867,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 551145.5263987469 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.391365805509384,
            "unit": "ns/iter",
            "extra": "iterations: 27427851\ncpu: 25.387359403403504 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.69379472977662,
            "unit": "ns/iter",
            "extra": "iterations: 22095041\ncpu: 31.689688469009862 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.08656665403592,
            "unit": "ns/iter",
            "extra": "iterations: 15512174\ncpu: 45.08281360175562 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 69.53688885613916,
            "unit": "ns/iter",
            "extra": "iterations: 10069274\ncpu: 69.53291627579117 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 113.95109779302544,
            "unit": "ns/iter",
            "extra": "iterations: 6146696\ncpu: 113.94573572533923 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.14029353077171,
            "unit": "ns/iter",
            "extra": "iterations: 3427920\ncpu: 204.13118392494636 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 389.7313876100984,
            "unit": "ns/iter",
            "extra": "iterations: 1830716\ncpu: 389.69784117252533 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 743.9684008079603,
            "unit": "ns/iter",
            "extra": "iterations: 941638\ncpu: 743.9196357835999 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1462.157305781516,
            "unit": "ns/iter",
            "extra": "iterations: 480065\ncpu: 1462.0573318196512 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2888.083073329402,
            "unit": "ns/iter",
            "extra": "iterations: 242304\ncpu: 2887.8573857633314 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5781.723325751358,
            "unit": "ns/iter",
            "extra": "iterations: 115186\ncpu: 5781.349634504175 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 205.37852952262514,
            "unit": "ns/iter",
            "extra": "iterations: 3260533\ncpu: 205.35602645334305 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 412.87404928128376,
            "unit": "ns/iter",
            "extra": "iterations: 1691352\ncpu: 412.8567122633243 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 818.1749945330677,
            "unit": "ns/iter",
            "extra": "iterations: 855141\ncpu: 818.0949948604981 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1571.5326225180447,
            "unit": "ns/iter",
            "extra": "iterations: 445873\ncpu: 1571.4180629910318 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3108.809587252533,
            "unit": "ns/iter",
            "extra": "iterations: 225174\ncpu: 3108.4197109790643 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6176.399076330722,
            "unit": "ns/iter",
            "extra": "iterations: 113244\ncpu: 6176.292033132018 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12320.65623626615,
            "unit": "ns/iter",
            "extra": "iterations: 56885\ncpu: 12319.701784301693 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24664.02416524959,
            "unit": "ns/iter",
            "extra": "iterations: 27643\ncpu: 24662.761892703373 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49233.30518112877,
            "unit": "ns/iter",
            "extra": "iterations: 14244\ncpu: 49230.27555461936 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98397.97163319758,
            "unit": "ns/iter",
            "extra": "iterations: 7121\ncpu: 98393.74877124032 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 197074.99606962397,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 197052.62184166105 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.717741168006604,
            "unit": "ns/iter",
            "extra": "iterations: 26164478\ncpu: 26.71511596753433 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.807255098950616,
            "unit": "ns/iter",
            "extra": "iterations: 27050272\ncpu: 25.80503789388903 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 28.15716715808528,
            "unit": "ns/iter",
            "extra": "iterations: 24996679\ncpu: 28.155696762757827 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 33.2776763642432,
            "unit": "ns/iter",
            "extra": "iterations: 21107198\ncpu: 33.27554979111882 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 42.89263532448151,
            "unit": "ns/iter",
            "extra": "iterations: 16369248\ncpu: 42.89196510432224 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 64.08444674925906,
            "unit": "ns/iter",
            "extra": "iterations: 10935566\ncpu: 64.08007660508878 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 96.64229052905287,
            "unit": "ns/iter",
            "extra": "iterations: 7233700\ncpu: 96.63811369008899 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 159.99437434663744,
            "unit": "ns/iter",
            "extra": "iterations: 4381180\ncpu: 159.98709890942538 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 297.0920264992622,
            "unit": "ns/iter",
            "extra": "iterations: 2360820\ncpu: 297.0693691175084 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 540.4988232771312,
            "unit": "ns/iter",
            "extra": "iterations: 1296397\ncpu: 540.4697557924007 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1032.353139148672,
            "unit": "ns/iter",
            "extra": "iterations: 679834\ncpu: 1032.256306686624 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 633.3308525641912,
            "unit": "ns/iter",
            "extra": "iterations: 1108261\ncpu: 631.4973359157673 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 634.5849583822519,
            "unit": "ns/iter",
            "extra": "iterations: 1104270\ncpu: 633.151755458071 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 635.4213464589649,
            "unit": "ns/iter",
            "extra": "iterations: 1105710\ncpu: 633.8065026077451 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 706.9681873809436,
            "unit": "ns/iter",
            "extra": "iterations: 989827\ncpu: 706.3662963318291 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 709.1162366709137,
            "unit": "ns/iter",
            "extra": "iterations: 986969\ncpu: 708.0173348971078 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 707.9650916715444,
            "unit": "ns/iter",
            "extra": "iterations: 989191\ncpu: 707.0492746120962 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 699.6468628449495,
            "unit": "ns/iter",
            "extra": "iterations: 985416\ncpu: 699.7570295215963 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 702.4786129066644,
            "unit": "ns/iter",
            "extra": "iterations: 994595\ncpu: 703.682101761684 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 752.3806135882119,
            "unit": "ns/iter",
            "extra": "iterations: 931601\ncpu: 751.5381992988418 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 787.3527210051554,
            "unit": "ns/iter",
            "extra": "iterations: 889448\ncpu: 786.3134809479208 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 822.6440407239078,
            "unit": "ns/iter",
            "extra": "iterations: 836281\ncpu: 820.6210878913045 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 625.9905256502253,
            "unit": "ns/iter",
            "extra": "iterations: 1118283\ncpu: 626.4516298663858 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 642.7410921992201,
            "unit": "ns/iter",
            "extra": "iterations: 1086715\ncpu: 643.7872974943527 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 648.8766253867572,
            "unit": "ns/iter",
            "extra": "iterations: 1079752\ncpu: 649.8981988467311 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 656.0625467195631,
            "unit": "ns/iter",
            "extra": "iterations: 1059112\ncpu: 657.3298414178204 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 685.2617952630038,
            "unit": "ns/iter",
            "extra": "iterations: 1026302\ncpu: 686.0756989681795 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 717.0244272616445,
            "unit": "ns/iter",
            "extra": "iterations: 977637\ncpu: 717.9701934395837 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 780.9879486614664,
            "unit": "ns/iter",
            "extra": "iterations: 891437\ncpu: 782.2216959665126 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 918.8053591519567,
            "unit": "ns/iter",
            "extra": "iterations: 763853\ncpu: 919.7921916949826 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1165.4744585631554,
            "unit": "ns/iter",
            "extra": "iterations: 600925\ncpu: 1166.6080026580148 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1859.786088165803,
            "unit": "ns/iter",
            "extra": "iterations: 375019\ncpu: 1860.678840277999 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2855.231934559641,
            "unit": "ns/iter",
            "extra": "iterations: 245220\ncpu: 2856.2235502790713 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 672.7257556259866,
            "unit": "ns/iter",
            "extra": "iterations: 1039974\ncpu: 674.0361508998578 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "3uclid3",
            "username": "3uclid3",
            "email": "3uclid3@nubwork.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d14bf444babfe0f2531fda703200eb2d7a5489bd",
          "message": "feat(database)!: add typed env wrapper and refactor env registry (#99)\n\nIntroduce a typed, signature-driven environment handle and refactor the underlying registry into an internal env_registry. This provides safer, compile-time-checked access to singleton-like environment components (required vs optional), and separates the public API from the internal storage implementation.\n\nWhy:\n- Enforces signature constraints for env access (required vs optional components).\n- Improves encapsulation by moving storage details into a detail::env_registry.\n- Simplifies system usage by replacing the old env_var decorator with a clearer env interface.\n- Updates docs and tests to reflect the new API and guards incorrect usage via compile tests.\n\nNotes:\n- Updated documentation and example signatures.\n- Added unit tests for the new registry and env behavior, plus compile-fail tests for invalid usages.\n- Breaking change: public env API and some types were renamed/changed; callers must migrate to the new signature-based env and the internal registry type.",
          "timestamp": "2025-11-21T04:10:57Z",
          "url": "https://github.com/3uclid3/ant/commit/d14bf444babfe0f2531fda703200eb2d7a5489bd"
        },
        "date": 1764127615092,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bm_set_sequential/64",
            "value": 1157.7749874441386,
            "unit": "ns/iter",
            "extra": "iterations: 605264\ncpu: 1159.4986501758108 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/128",
            "value": 1675.3811669428421,
            "unit": "ns/iter",
            "extra": "iterations: 417043\ncpu: 1677.7460861350503 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/256",
            "value": 2711.118169878038,
            "unit": "ns/iter",
            "extra": "iterations: 258213\ncpu: 2712.637082563952 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/512",
            "value": 4945.4194924287885,
            "unit": "ns/iter",
            "extra": "iterations: 141583\ncpu: 4945.558146105343 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/1024",
            "value": 9246.820943502675,
            "unit": "ns/iter",
            "extra": "iterations: 75613\ncpu: 9246.985002579471 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/2048",
            "value": 17856.969071122352,
            "unit": "ns/iter",
            "extra": "iterations: 39219\ncpu: 17857.258140188635 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/4096",
            "value": 35505.6755497755,
            "unit": "ns/iter",
            "extra": "iterations: 19963\ncpu: 35503.47532936029 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/8192",
            "value": 69447.92728356714,
            "unit": "ns/iter",
            "extra": "iterations: 10094\ncpu: 69439.79869229071 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/16384",
            "value": 138508.0904780832,
            "unit": "ns/iter",
            "extra": "iterations: 5062\ncpu: 138495.97175029767 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/32768",
            "value": 276122.2713666616,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 276110.8546671909 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential/65536",
            "value": 550922.4283465067,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 550918.0905511967 ns\nthreads: 1"
          },
          {
            "name": "bm_set_sequential_BigO",
            "value": null,
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
            "value": 25.292256581122476,
            "unit": "ns/iter",
            "extra": "iterations: 27727184\ncpu: 25.291301669870276 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/128",
            "value": 31.70850915706319,
            "unit": "ns/iter",
            "extra": "iterations: 22044569\ncpu: 31.70644706185909 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/256",
            "value": 45.1707191715039,
            "unit": "ns/iter",
            "extra": "iterations: 15487335\ncpu: 45.169542855501 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/512",
            "value": 69.86938327643938,
            "unit": "ns/iter",
            "extra": "iterations: 10022124\ncpu: 69.8662086998724 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/1024",
            "value": 114.1673999396625,
            "unit": "ns/iter",
            "extra": "iterations: 6125504\ncpu: 114.15816706674288 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/2048",
            "value": 204.34699160120508,
            "unit": "ns/iter",
            "extra": "iterations: 3432158\ncpu: 204.34023928968278 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/4096",
            "value": 382.5520646167596,
            "unit": "ns/iter",
            "extra": "iterations: 1830485\ncpu: 382.50332125092456 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/8192",
            "value": 750.9158834828254,
            "unit": "ns/iter",
            "extra": "iterations: 932944\ncpu: 750.8863575948817 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/16384",
            "value": 1459.5866867976827,
            "unit": "ns/iter",
            "extra": "iterations: 471577\ncpu: 1459.3700816621638 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/32768",
            "value": 2920.071078380438,
            "unit": "ns/iter",
            "extra": "iterations: 240481\ncpu: 2919.7697281697924 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set/65536",
            "value": 5743.718974409676,
            "unit": "ns/iter",
            "extra": "iterations: 121569\ncpu: 5743.383963016895 ns\nthreads: 1"
          },
          {
            "name": "bm_count_all_set_BigO",
            "value": null,
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
            "value": 211.37042233509072,
            "unit": "ns/iter",
            "extra": "iterations: 3427539\ncpu: 211.36518038160912 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/128",
            "value": 410.4675035383459,
            "unit": "ns/iter",
            "extra": "iterations: 1702770\ncpu: 410.4194013284225 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/256",
            "value": 820.840095180742,
            "unit": "ns/iter",
            "extra": "iterations: 855215\ncpu: 820.8257081552589 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/512",
            "value": 1579.267697168011,
            "unit": "ns/iter",
            "extra": "iterations: 443150\ncpu: 1579.2053322802622 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/1024",
            "value": 3115.930713951964,
            "unit": "ns/iter",
            "extra": "iterations: 224735\ncpu: 3115.834169132537 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/2048",
            "value": 6184.894665664833,
            "unit": "ns/iter",
            "extra": "iterations: 113135\ncpu: 6184.657639103723 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/4096",
            "value": 12333.192631913118,
            "unit": "ns/iter",
            "extra": "iterations: 56704\ncpu: 12332.48509805305 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/8192",
            "value": 24605.90738590337,
            "unit": "ns/iter",
            "extra": "iterations: 28419\ncpu: 24605.083007846857 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/16384",
            "value": 49168.81117357723,
            "unit": "ns/iter",
            "extra": "iterations: 14230\ncpu: 49165.46177090657 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/32768",
            "value": 98287.50900140543,
            "unit": "ns/iter",
            "extra": "iterations: 7110\ncpu: 98284.82714486631 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse/65536",
            "value": 196598.64341957218,
            "unit": "ns/iter",
            "extra": "iterations: 3556\ncpu: 196588.42857142925 ns\nthreads: 1"
          },
          {
            "name": "bm_for_each_set_sparse_BigO",
            "value": null,
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
            "value": 26.46209618759072,
            "unit": "ns/iter",
            "extra": "iterations: 26454951\ncpu: 26.461538749400734 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/128",
            "value": 25.6905221951809,
            "unit": "ns/iter",
            "extra": "iterations: 27300003\ncpu: 25.688435785153825 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/256",
            "value": 27.650021456975125,
            "unit": "ns/iter",
            "extra": "iterations: 25294805\ncpu: 27.649676998893444 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/512",
            "value": 33.28393553150944,
            "unit": "ns/iter",
            "extra": "iterations: 20862595\ncpu: 33.280016172484636 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/1024",
            "value": 42.79581098893735,
            "unit": "ns/iter",
            "extra": "iterations: 16367825\ncpu: 42.79455559917103 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/2048",
            "value": 64.1906422155764,
            "unit": "ns/iter",
            "extra": "iterations: 10895656\ncpu: 64.18337473209488 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/4096",
            "value": 96.72060369458019,
            "unit": "ns/iter",
            "extra": "iterations: 7242934\ncpu: 96.72065905888438 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/8192",
            "value": 160.06213986040459,
            "unit": "ns/iter",
            "extra": "iterations: 4374519\ncpu: 160.03861727426553 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/16384",
            "value": 296.6907046140887,
            "unit": "ns/iter",
            "extra": "iterations: 2356524\ncpu: 296.6764671185196 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/32768",
            "value": 540.7510947588619,
            "unit": "ns/iter",
            "extra": "iterations: 1291837\ncpu: 540.714050611647 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity/65536",
            "value": 1031.3424193567337,
            "unit": "ns/iter",
            "extra": "iterations: 677304\ncpu: 1031.262081724011 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_within_capacity_BigO",
            "value": null,
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
            "value": 633.1857642252089,
            "unit": "ns/iter",
            "extra": "iterations: 1109051\ncpu: 631.2680030033824 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/128",
            "value": 633.6363364853737,
            "unit": "ns/iter",
            "extra": "iterations: 1108280\ncpu: 631.9413144730677 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/256",
            "value": 633.5147231185726,
            "unit": "ns/iter",
            "extra": "iterations: 1109072\ncpu: 631.6697527282353 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/512",
            "value": 683.6133360177607,
            "unit": "ns/iter",
            "extra": "iterations: 1023139\ncpu: 684.58932266299 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/1024",
            "value": 685.8562640938512,
            "unit": "ns/iter",
            "extra": "iterations: 1019780\ncpu: 687.4394222266071 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/2048",
            "value": 684.152560347375,
            "unit": "ns/iter",
            "extra": "iterations: 1020547\ncpu: 685.7975536652842 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/4096",
            "value": 687.9743818095469,
            "unit": "ns/iter",
            "extra": "iterations: 1016153\ncpu: 689.5493218033572 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/8192",
            "value": 691.1172994042805,
            "unit": "ns/iter",
            "extra": "iterations: 1012989\ncpu: 692.678517743146 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/16384",
            "value": 744.9089744934078,
            "unit": "ns/iter",
            "extra": "iterations: 938506\ncpu: 745.7011601411223 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/32768",
            "value": 779.8603987456761,
            "unit": "ns/iter",
            "extra": "iterations: 901532\ncpu: 777.2118349669415 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc/65536",
            "value": 806.8300705630777,
            "unit": "ns/iter",
            "extra": "iterations: 872362\ncpu: 803.1812389748968 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_grow_realloc_BigO",
            "value": null,
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
            "value": 618.7346731031694,
            "unit": "ns/iter",
            "extra": "iterations: 1128359\ncpu: 620.6596783484831 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/128",
            "value": 636.1033528068041,
            "unit": "ns/iter",
            "extra": "iterations: 1096661\ncpu: 637.8124789690067 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/256",
            "value": 639.6850784232788,
            "unit": "ns/iter",
            "extra": "iterations: 1091767\ncpu: 641.6475007901679 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/512",
            "value": 653.3990790021736,
            "unit": "ns/iter",
            "extra": "iterations: 1070580\ncpu: 655.1642707622171 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/1024",
            "value": 682.2592589663954,
            "unit": "ns/iter",
            "extra": "iterations: 1025303\ncpu: 683.7993880906718 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/2048",
            "value": 712.1664499824561,
            "unit": "ns/iter",
            "extra": "iterations: 973746\ncpu: 713.7800915282496 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/4096",
            "value": 780.4605514532907,
            "unit": "ns/iter",
            "extra": "iterations: 894621\ncpu: 782.3846053240597 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/8192",
            "value": 912.3113815422684,
            "unit": "ns/iter",
            "extra": "iterations: 763051\ncpu: 914.1331824369395 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/16384",
            "value": 1161.7441328414138,
            "unit": "ns/iter",
            "extra": "iterations: 600929\ncpu: 1163.3147060756835 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/32768",
            "value": 1648.7764145183803,
            "unit": "ns/iter",
            "extra": "iterations: 424142\ncpu: 1650.6349147151836 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free/65536",
            "value": 2639.262639943896,
            "unit": "ns/iter",
            "extra": "iterations: 265961\ncpu: 2640.616804721273 ns\nthreads: 1"
          },
          {
            "name": "bm_resize_force_shrink_free_BigO",
            "value": null,
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
            "value": 681.5634478775132,
            "unit": "ns/iter",
            "extra": "iterations: 1032635\ncpu: 689.4474640089354 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}