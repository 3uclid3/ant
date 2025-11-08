window.BENCHMARK_DATA = {
  "lastUpdate": 1762571987520,
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
      }
    ]
  }
}