const quizTimeoutInSeconds = 30; 

const quizA = [
"https://docs.google.com/presentation/d/e/2PACX-1vQViVGCOUfNVS3awdxPd_gBWoU5AKuylGXOcGXhsi0uopTjixdczsIf7bWJWkoyhir94VEMuPsPlkCT/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vRoi3_N-_tWy6XLmkWmExHTycnPUbKCgettFi1ssZi-qcu0bxrvP04JrPwl323RK1Q2euiD03i0eoSn/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vRYoBkC55g7FqCI6a2MM44KmKNjYXrJv2oz9FDRicMA7Dqe0YPSkloUegZ1N9yu-Yio_emRHMo4S6ED/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQkXjyZNkjEhvE__KDMgJjsg9HJ_ZVm-BWEO1oauilEyngWNTJNVjMMqr8Fic9sgkXj7mxRXyGT-QNm/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQERXIQI6Psh8mB6y2QgY5nqxu6BksqspVmmC5kj66iEjSlFxz8hDTY3T8immfCYsH4cx5v_Wh9LDc4/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSlEL8brry4PI4PkutRzopIjI7wAn9eEXct9dxdH5bi-yqBKbgdWnr18ddqbHFT0ygoiEykY41xAAAY/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vR6btvOSe0YiaitzNI4NPghG-2wkRjHv6meCAxJC1o56ToeCqXEfyNYXb-3oigY1p0viCh3Fq_uJlmO/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQPnJLqcVwXc7EeMHxlbwD3VPBqEhpalBPU2XJ_DZSKAKuo1TA5F4teQWht-YCLPBmPmNXw0mnZIiZ_/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSRJ9Mn1-ACn3AcaYFkAghsISBiZFDni9Az0t-eKKjW_ul5Ru3JiGTsZ6Ru6w5NgOdrmN_AjDe52-Du/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vT75R96xNw3Mjqe0_bG49j3Vo1EebD8uVe7EknUWkFcgsXgAkljjLwDY_tiMhzexwegXQouV6gc15ex/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vRJutZ3GcAmte13pWgqPveX5HAlfP1sDQ3HcyoY5yolsMl0-OI2wdAN3nnApx7R5QUnHFz3HndBfUUW/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQv1cCVyk6mcVYCARLVlne3tIMoxq7wyjBhhmQunN0lPUzIeCS2JoFCrF256OfGhYPuhID6Y-YQANhH/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSIW0S14Rf-K3plVuH2NVzUj6M1f19TFlNyEV2qHV3R_6TqGkFncSbNAsEQMEMwM3rFQ_--wBC_wR55/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vS2G7W7MS3BeNoWyII-acJybIpJIshpUs0KeCMP148jb04k0dpi-U2WQOLWC0Aa7M1I6_ERnIK4iVYa/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQ7W-KXx-apK_f5rX1eiPPj3OHsGERlvqlEhEtvQvK4xnAUeMScgpiYwOsof878v8T7w_40kbNa0nbv/pub?start=false&loop=false&delayms=3000"
];
const quizT = [
"https://docs.google.com/presentation/d/e/2PACX-1vSROc0Ys1WEsmaJ8m9NhQFHnk2YmTVFcTZxh2vORgNErE73eWOUanmtHLAarOBt2p2cnq9rviN5oBst/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vTw-uL8RCUgm07pXlGzPAjtvJV-6uOIj42ETXII0B6iVTAjYiSJhtvJ59fuj9NU6024ast89aQrUMrq/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQWdRud0PtaarHjL8R9UMAicvK5z3bAhvGFyMWj6P54ZFK8_VncB6XJaXCCnY7T_j9wLsr_p65H26ot/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQ5ioPlZnJioW0uHF62kh4_691AV7SNnRRbigjKpmFrH04aEBXgmL4i1iSmDSmsDdErrqVS0eloi6iW/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vR2ksNu29TdcnwKwxem1joFypvYYjiRd7iHwHquGd9YLNFjnqHLWj5JcPuMWSiW1FFHkYy8RU8IT-uy/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vRzHQJIXC7feE8YcdS6P2FqcWO2dmwuHvvFAtMRutbqAfo4KCfIYnFMp1vfxO36ybCOfBOwtf7sAXdY/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSKBSNrKJlTNSePk5B30qcDHBvpk_sR5O8I8Zh-PrK5YldSbx9c3CYhngZicX9C3oEQfhz90NT_V2q2/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vTC-VG4NTceXfzKru4JlzXDY_oAO98BkgHomwMKk9LwMBnkjnZyZkghUK_GIgAF_1Lm3AlbtkcQkfuy/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vRJqtmyhPSSGKCmLhluyDcqGsPhNGK0yhicZKyAqKB2s9FJoBqjaQMkMIvblbnU7ffHngDbmDmhEtr2/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vS81qStDvb-yKQw1vhQ1koV3EcVtaxtLGPfkUU0gfumaLGyxK0ao-AELJrCYjhLP6KbOaVx1dUEwIqq/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vTiwIemojSFOLzLAtBXy9ecr2S-drZhcoBvJke8kna9wd2D_-4sbf1GO5-iYBoAu1F9NWPM4GWMWNjp/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQV3RBSYFhwncXFcyet8VhyKLYqHQFDlTOrg1uR2bA6B9256oAG3OQ6OYgRWmhv85BWLHo0caNWegBQ/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSqPU2hFS2AaJj4rBWymObVVyyoVV1qYnO47KmPDb8nTZGawfYgkrysLcDIN0ERXVE_HOjAf6sy5rs4/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vRJy3YivqAooiHvubsMqlzzHpNtP_wMQm1dACNnqyWHawfCBfV2fzsqn59fMgxzjPZNNyR8mrGpYcBv/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vRDu04KjuKrre8MMUb0qojvUeO6ZZbK1iYcZ1bwKvv-iilRhayHpo5fOqHQbvQntCy02mAkzw_xCgQE/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQ1TQd_N67FTUJilcxqm87554Nfi_215og2FNYOXn-fWtB3u-X70BvAeHwn1BwB5uPOHXmYq07RQ-sS/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vR3g1va5D_D6va7-uORzoODaxSd2ESAHqBSDawUK5z6mHNaiO9GcfqI3AQw_DoeripNK0sYUbTw38k9/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQpBVFxalH40fQLVk0egzXvfTRM70MoV23Ai6zDFGgaQ9XlpuvUR5RYvPvlX6cgqo-JK-Ri3mt9Zx3v/pub?start=false&loop=false&delayms=3000"
];

const quizC = [
"https://docs.google.com/presentation/d/e/2PACX-1vTEpn7GAlkrS_F6jT7MOM3KR1Yz2xMcloRpEEpXZRFG6lMhVpouAIzU7x1Yzh1qjirxslTghUiyBKw7/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSUS_HS05Y3h27vZsRadM-RGJSg_jrD4bL2IZB6oOzhnleVaVKFlLzJlZlQPk_8elVBy9MppdsX8qAt/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vS4uSRN6BzryMa8zmr4ow1CmasHptYMOB_7WvLcA_NB_W-_PVs1JosqcQ4DVJiUVB-M_zI1XTQ-Q_fs/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSJJc95OETotcfjQnicL597938p1y_1nt_TdnRx32eP3PH1WAb2YqRZ1gnCpLxtnNQvA08FNNHgiXo4/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSaRhwdJ28L_4WvC6cdaokFqilBF-OOLyJJ68K44VuRU8-A69Gdiy-c9eNX2ETBDSblxg79S-tjM2WY/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSfWdKEbZ23diCOUplTr8VDKVJsASEPxKNFXec2rPwDPutkzB56mvqAhv9c8mKayjgYMm1bUzZx-zJ9/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQ9c9bwEEA-beyrOmtYWTfkTqHCm51C4QSp84iP8igYc0vO1AYQUTDu4YhJHDezUhWVph0hBjVvSo1l/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vR6PgdQyiZrp91MJio1n9FC0263QGbADKFH1xizeCYa1F61V8-olY5KMLtg1GaZEHUcEKE1abRD-jOZ/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vTL-gX6EuSywqIT_5qhkpDRKYJ2x1D0kKiAjPUm6DQxbUfcLfTj1XMzWcxzDWjD-7w6OB8iNcn97oKG/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vTEHx2O2g5vSj0JzcYmP0ITS2ahVCf_m8MUnkY1oTlZk71gSi0quyXpu2RTf4WD2_oUTjiQvR-OqcEq/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSGqvMDS1ujbhGJWrnYoEoCvpO2CnJDKQiJaPk0Yy8B9O2biWhX4KdoO_ZRDxoPSROCLRFM_uUtV4Nz/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vREGwke2ERbADtjHHElSvMZYApYMWye8VkcY7dnmAyJhAg96CTtyizKYMRHGL9xSI58Ali8UlZjUXtJ/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSp3P_XABamMYKyYMNtGR0CTByfBcZz1649wXIOPc34wvIy6jycaoP9xUMq3yClBq7QzkfN1-O_emuR/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vT27vhzRFRKuEcl57w6xi_OP19r9yuydHukKi9w1wKsoWrY04EZGYkwmoX_HreWJ6FB0dvEFHN0wzo-/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQY83TaMkohyErXc9IG8E6ZHCbG2KE8TXI42e6m3LEfZOanY-UMNTyQArTeH0XvXRZVeOe81aecbE0-/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vTP6H5-FnTqT_c2EOGyfSqxAjP4rC7YeMby1y4p60cN8uSpm-Q5NcB14piN4x9xE0N1dfKS9R9gMXhC/pub?start=false&loop=false&delayms=3000"
];

const quizG = [
"https://docs.google.com/presentation/d/e/2PACX-1vSJqIkrxg54qQ8uk1mXrgSTF8IMppsm6GCw0pqSxNOGUKVdeY5PNSUMrpWbid_-M5xfNrIec8W25B-K/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vTsC-LVIJOgrdmbugy_8FV2VEBUT5PshF3WHsIa8_WB9pHK9Cgxx6hizm-nngaldg_AmwESt5b1cx-a/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQ7-g4ZGjldbIhcjsarhvd0JjykxwNRvfpC-XUiaODF0MiCrFPhjoeSAHkeOR_i5e52dEKP52GZaM8b/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vS3oYtoYh9EVaAKOAx2J0goYKs53pa0sa05cQFKq3jAwRqez9gBW0VmJt282P4KcISWCklmvNaP5oLC/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSFDYccmyDOz5iTTJYxAKG9gtJtgynSCAIiSAtW_7yCTK3sW1_CN3pNfpkeYEP0pW-HdFAzqMf0avgS/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vTBdpL2D3EB5exHeu_xrNZpToL37y_88Rrjc9vESR6wt2Kvc8hYvOWJK9O7cprT80LVdW6LS9q8QbVr/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vRpAfTqGO1qDVbkq4jj0c-TAyAMlSZyCCbhcI5mKOuo_0TJrxR8qSD650MUFMHemaLsEfC2ODqpud3e/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSuAkBfoECR8Xua1e7esCrCJBOokS7ppT_bN8TtFWyjZl0CCn-V7w1hy1YPy0DYaHj-w_-bqOc4-saO/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQHTADlV1FvvH75F7er2psS5AD2-jdhmL6DEeZ5Oru_nv0H81SIcfgdccaWOS4iVfymh4Erf4h2TNd8/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQwN_6r8qhAdQNApNhtKebgcES8FtBwWXrc3E9FbcRE4oUBfCrpIHUbR6dVyAKwq-lWgyMrWMQw95an/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQ5o0cyrG2v20X7bJZYlRgghbTNh3w_i0M8WDTr6kHG5dMa5rgwN4m_2DXjZnJBURK54Dai3O8sFOLF/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQqfzURIWMZwmMdqyyQZGKjnmMwlRa9_pqa76FEGGt7lgwFs8g5sxIRVyMwzyrOwFISWE-woO0HBp-a/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQd_psMMRdoamObGmeam_KA45MRXauaDLMncmWjDS29ICPTCYcqUaahGIDsTdaHXwfsCBaXnAbPk-OH/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vQocMFVeic1Li6fuZXZSaqqWu2vHNWhv67-NF3rOSuvO2Z9plX5OzrPqq0_OZLjLpCbxmAu3TwT0jRv/pub?start=false&loop=false&delayms=3000",
"https://docs.google.com/presentation/d/e/2PACX-1vSbThn4clapXHCTQsNJwCu3l7BzGJOXspbhAXaekLFISlFT82ddGoLcMRQ4L67l1BDpIE1FPgOK_vKF/pub?start=false&loop=false&delayms=3000"
];

const intros = [
    "https://docs.google.com/presentation/d/e/2PACX-1vQVNZqPHj6lYEfLlXDkUftHw5LQ9nRf7Jmslzmife9zkB_w95Y43qM_16F62wm8Sl9GOizOwIpB_EMi/embed?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vQ5f8fhzrxR0EjPJWdB6OU1VTUTtHd0lvk8zs8GBrvW7xIwi1kDCNKYAIxW5YgQU4uWVIXujfkEM78n/embed?start=false&loop=false&delayms=3000"
    ];

const credits = "https://docs.google.com/presentation/d/e/2PACX-1vRRn0MyltNLSuOI8ly-GhH8VQFNbK9-n1BjU08Pg_e3RQLwtcmbIeKc805CfN8bKA/pub?start=true&loop=true&delayms=3000";


