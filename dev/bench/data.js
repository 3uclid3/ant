window.BENCHMARK_DATA = {
  "lastUpdate": 1761803763492,
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
      }
    ]
  }
}