window.BENCHMARK_DATA = {
  "lastUpdate": 1761843967788,
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
      }
    ]
  }
}