window.BENCHMARK_DATA = {
  "lastUpdate": 1761838469710,
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
      }
    ]
  }
}