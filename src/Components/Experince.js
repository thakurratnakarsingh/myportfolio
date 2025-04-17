import React, { useEffect, useState } from "react";
import "../Styles/exp.css"; 
import { Link } from "react-router-dom";

const Experience = () => {
  const [dynamicExperience, setDynamicExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const experienceData = {
          "message": "Experiences retrieved successfully",
          "allExperiences": [
            {
              "_id": "67fa1a662eedea99d0cbf1b2",
              "experinceYear": "1",
              "startdateL": "2024-05-08T00:00:00.000Z",
              "enddateL": "2025-04-30T00:00:00.000Z",
              "experinceCompany": " IBM | COLLABERA TECHNOLOGIES",
              "experinceResponsibilities": "React Native developer",
              "companylogo": "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-2.jpg?width=672&height=448&name=ibm-logo-2.jpg",
              "createdAt": "2025-04-12T07:46:46.966Z",
              "updatedAt": "2025-04-12T07:46:46.966Z",
              "__v": 0
            },
            {
              "_id": "67fa1b1e2eedea99d0cbf1c0",
              "experinceYear": "1",
              "startdateL": "2023-02-13T00:00:00.000Z",
              "enddateL": "2024-02-13T00:00:00.000Z",
              "experinceCompany": " RIPENAPPS TECHNOLOGIES",
              "experinceResponsibilities": "Software developer",
              "companylogo": "https://media.designrush.com/agencies/118383/conversions/RipenApps-Technologies-logo-profile.jpg",
              "createdAt": "2025-04-12T07:49:50.956Z",
              "updatedAt": "2025-04-12T07:49:50.956Z",
              "__v": 0
            },
            {
              "_id": "67fa1fc1d1ea12e29229f7d6",
              "experinceYear": "2.6",
              "startdateL": "2021-04-05T00:00:00.000Z",
              "enddateL": "2023-01-16T00:00:00.000Z",
              "experinceCompany": "Vaaan Infra Pvt Ltd",
              "experinceResponsibilities": "Research Engineer",
              "companylogo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEX///8AbLUAbLcAa7dyc3YAbLR0dXgAbrkAa7n7/f4Abbry8vIAaLV8foDY2NmCg4Xu9fr1+fzf3+AAcrrq8/nH3u7c6vQAZrRhnsypqavk7/fV5fGx0ecAdLrt7e14eXyMjY4ef7/A1+okfcKNt9qkx+LN4/HNzc6Vvt1rbG+ysrRHkMh5rdXA2uxsqNOhxuKNvNxMlMk2icWYmZrFxcZIksiBrdRcl8pEk8kqhMFmptOurq+goaOTlJY8iMcAeMWHvN1Njst6oMz5VD4GAAAcbUlEQVR4nO1dC1ubTLAmkGR3EQ3IJZSLylUqt4AmSGqj3/n/P+rMQLSx7devVRrznJN5HjXZwGbf3Zl3ZpbdleMGFkt7652yPWQ7/poYifzme0tnwIb8LZGr6O03G1U8XEv+lqzqNyspiNlYg7XkL0kklu+5PVdDZaim/B2JN+7brRBEMR8P2xS19bx4Xw2+WhvDtOWvCEseef19VVjpPDtgPbU38+adzVNWlByunrKMvL91fjCvD3YQfZXW745KNJPSZIjW/A2pqGS+xxn2kqjUO1CyyedEjdj7q/EEEg7QnOFFWVJhM0DQpTWEf7+y/w1xVF7I3uXutxISXg3frwsDCutCSWUNDXtH0P1NcpcX0m4Q5QPBaTjYEH0j8F4+RH1KKvIuGjSLD0NZWZfUsRUZCekwHJjRCV2jvuuLIbT+3WKY2NN2LYxINoxWOfOR4PpY6WGki343co7Ljx4HMUPoM56M5thbRpUcgCUqYQpMI2c8zwcD9ThrxZGAibRcVAcQwBm1CcZipHQiDtacNR0RFViLhe4BcI2vrhR0hoSn2VB1lhIZSVhbKX58dMPCeahAVgG9Lg0WMMcumdAUXkSP6VB1vlmUSiwZJ9fChAiDeMOu0lqcEB6s2gnIh6upFWC0HQOTEnewaTLFlEajeYJR+Hwgfn67+JILIY0jkJHoDVYpy6TRhBYYKM0HM+63ypoGENJkc35E7werlCU81LeUIY6g1WC1vlFaMYDo456OevIbSBzCj4TWQCfkffAUseVSDLddEezmXVPBr0UHu+ZdnbOWVP3gealcEj2dM8AMR/N3ziPuiuHxoxHkYlrz4fl+NBcAoTMnEIQMyOtGKox4wKY1vPjOKea3i9KFaE8dwsV8NCJDTh/B2EGNGfylpMHJLfYBybDdhdkFRYQQ0YzEdz1z+k7kAtyFaDJAKHapi5zvPwR3OldsUh4QQqQMzmLANigr1IpKA4R8N7tlJPtHuFhgS+5FRGgiwvfO5+8KRLvgLmpbbgSsH8i12H+2v0b3p9UCH+isAmdBzSERJgK4izbWUkCI2b6T7t8t3pvwy/IIIFSWgFBaD8gFLAGXz3u5BQgxZuIWm71Pg7M6hTEzXMjsfTkVR7xUDImwRIRBbqR8j9DcP0KlxXDKUHne/RsIow6hb4MVuEhp7WbvWZQSBMAANiBUHa2mgyNUO4S6x3cIZXeI5wV/JrL7WCLCEa9G2l/Q0g5hngc9Qnv0EQjFFXwz2CFfIsKBmQbtUAhyBxAGEc6gbgaMen9PAKEpd0wjhdpf8BY8cmkMytoxTfIxCJeQvwX8SCog8hgaYSgBwk0MTqNDWND9a6kSiC3kb54wEiqti2mGnLxVMKbh03hFRohQqT4CYYvTF1otQi6uFV3kPWBcJWcS1GjakGIA33CxR/fvLdg9VROcS5wQ18roZCS2A8ZVmom5RdGliZh/Pgr79/iYVZgaxtyE+AlmAu6AbbCWkOOTlb0BhLXNhY/CB8SlTxRi/y4znIc65vjDzmJABqwmfsBPxNTCuQxz/7lFNIeYo8vuqWmNcJ5mwLlbnIkaqQ5GNqKp2DUvFj2P7SXTl/vezOeED5kjEeQYTxx4NrELafQQciiSceD3SV+5shddtfrpPVslkinHPJmIgdG5i0FnhMFN1DFWSxZcovKkf+qT78XvK+uuIzWPCLUFjn9C+DwB9zXsrD4BB6u3+DQkl01+u8qDFfvxilXXn6wWiKpzLTiK+SKHPhfVwcgUn8xMaOYA3YieEreC4HaDF1f7YdQs7SxxLRGp4LI5OvvYAzKVBnu6Jrci9FuJgQ01OeAbsV+umA05F/QLcUgHJZGI6KEhjgivV7R/HDaM6CqZEJIvwRvOF8pa4ukai7VgT/PfhtSt4gWqIYKjeNiMZEX7x2HDyILioyzbFcDL5lYtjOYduyXinp5hKC2m95wMmT2kvfgwk64dFzh1sDnhCoxbSsATTURX9qEnR2h/WqruK4VaU9wygBkObVkJeQ6p85R2MfIgokF3ETVeo15UkDmNhBo9vfM4ZOj7S0nm3epIH9JTKbYDiGeCCJ3z40BmkgN7CWmOxiiVsrpdl2E1+3taqrsULREjf2rKmP6SosQnfs0wavo0ByXNnjAl89hiDlyGk8Ll4/xpkOp/Q6yaoiXKmYDroDB4FDYLTHSGmWpgSzrh3ajqp7eAZyi6JxjC0d5yRCWjHW9CvAgJAK7Z492wgDjLHST41qFaoXE8UArV1wnhxYRxLHJpPUTtvye+K7rAKkYDkUxjryD04IsE2zXI85MVmfBqEqrA0akBPMN7MS4uE6U9Pg22KokuGS6rx4kixwWEGwfg9s+J3lv5UgStT1KoTkhwPLsNAKEgunucblNC0B3QSB00STBj9BRk9QRNIgOslkTdF8zQ7SbbFmTURd22y9P7fSbBeSCQ1sZNMjj33iWqbQlJorR8t8dScH7NS8xuGkOve4ZmKeXJADsdfl80Uxxh2h2jEmU2Prfgkwx+d0t73yUxLjY2S+SZwEm29FVKZKgl1r8r3XQ7TtXOkfCSOYG4IwffLxXv3dkVEsgGn9Zddq8DWnyO3y2x3tvWy15VtEbkSWVzmFrQxmrBYdAwk0bkvaGjkUojcYnEDEEgTnmrJWgMdODW17K/rqos7i2tRF6ByAYHkeQOWI3gOZ44kdbvq99ReSJEa3BAtIDUd4JT6RGufOx3Jcrx3x/JvH+Khkkq7zqchvP6tZVCNkCfFqBU71uDqUCiSSsHQ1I+Bp3gIW/SNxg0dfMXLHq3nf+GFP0o6RRaAS4qAk2aP/kuMmAJOev7tskmEs7JYO9JpY4WsAb/OOf5fjU0K6t90E0+6p1eN79WKzLQquDpQBBAgeDFePcdOZTSCqD7C5y9WBrgIYTaUHDSWeg3B/vuXnYmsqbfgxfjvDRwp74Bols7GHkHC+AE8o59vJBsCmnZBbrOYt45+0QEXaFdch97/+zHY+jqBnc6sQSnbdVExtjNTTB9Is1iQ/oFMG8SoxUhhjeRxMLcw004Su4CXKnBLrVTOuACz19KNq9RE61G6tyyssYtT3oh8qBhBaQC5lvJJhQh01xg1LbMQfn51Ig3qKNet++ooUM+wPul2AFtkdqwm5HlLIjX6DoHX8F7UUWFtyZResvzm8USn+A7ocpT17cgnEddZdif4nx/i2kjlQbYreioRpJnxKpApCQX+AmtI1eQ3rYFFHJc/jEzkU0XTiDgIg+cP+B53LJiVVTa40pTuSAUkzYZIu/RaF5bjioIrh+KEKWuFyp5U+zGSpcIxQI6DfQhlcBBaKDyEH/jYSCQr4l7PWwhTkVa6wyCNwkgSqkBbAOYoUVETAoivmVxNuQRQppAxC3V8ZoScW1luDBKrPU+IQ2cfeYWDLSI1j4D9qMIsYlDVZDMHLSKek+N8Ib95uBX6aasJeCVfEV4ahrwezTptgLYjSTs+9ATFlJeRKehezCKQJ85dDjJ0CuSdFEL8z9ee7IgIjgKkQeWKYlATT0TESCN8IEMxAFvJui3imJCLBWUeMoDsgFp4kwU1MSBd6R5CgT1D11XropqCFrOkxIyM9roWTeCIm4NgjRY/ID968o9HYlCBhBboANeqvOMUrVEEiTFk9ttpfl9MTxRLbIudHA8Skxwh0gyEKUx7DRxiAmgPxZjiU/UCo3zN7igV2r9DJyI77gIEV6mf/A0UzapamaQVathXlOIARsB87GgZGyhCqC5gz24+yMBQh0JoqkDC0KOP6JBudjA0EXoyrJC/YPQBhJ70cw2PIFgrZq7WZRKBCe8I2atRAEzz7+J49+F6Sm0g9QORow8QgyTlAb5FqL72yE4iwLRfPJg7EO9ot4i8SR+QqTWUeIG1yh+FECQeIlRYxAyA3wgGKO7LtfzjQOWxLsFQPzNKVzfo2bm8SJJ4pRWZRbgdpJ5bbOoFnEWb6+O8Dsx7ueYCFSWEqodpabOAhQVyAEgZqr0W51vt+Ia2JeqUVzPC8dUkbloJbPMheib7hzUsDekSv7iz/E0DGxFyXLs7xF1w3zpOmCivLrOgt+JbYzgschcHnRRD8AXepiwiEHC9LZ7Vb24CdnZn8/X19HLc7QwQFMhhWFnwKITMl87WR2BAQkCqF7wn7miUQcAUBBTJ09NZwXaDoza+FqCSiGoL0f6KP56j+bInLbxlefXKeEnPG0jrTMbQttFlJVGBsF4mqWt/2vVstPgyVSp2OhOFpXLOYGqgsT2K1wzJHrPZzAqeuHt9XwFcMPBarvZisXgGXheUAtdXwHHwBCYZWQoiSdKaValvxxFu0mzhlA3szQnWoH58pJq+voqAHchCM2WY1gcbvYelzou9Yq8b4DseBI+KfJWum4KFALUYJ1zzE8pXFOkv1AuuzGzGuL0SOHsbAPqDp3i2Am+Atjh1qHaYU1G+9/a5buUeOttJ9trFTwiT+pF7NdzyguiFxqcVcxF18yqf4UYm8XaI3Spc3JSE/CHc6+MoxTnf8T5/bb/9KwllP+II0DiVBCodB91lsLyZecRJW8B5qgSXgD/r3GOB477yfwXh2avs4pQdaHIZUsF8Ifek+XUggDhN2n7mRDmVyNK/zDIHUwscM08ldrM1xiqaoPmCJ46yUszEAWRepkRF4Horp9+tj+S2Yt1S9Umt5JaFEGzm0XuLCnUwT+miYX7RuMwJaD0avMRcTeKguRJBEltothi8NYMiEREqQ79sqhdSufBKspalU8XP8l9rLJRUc8hRqOSWheJE0EmLwpCsCzB32pGVMAnoA1eOODu1D8UZocucAz088ZMfI2T9aRS5yK8LZIoyjwB9KtKPQjsih9GwQhbibhptaFUCszESVYwXqIkQPdY4BzKInUlSKch5/D3v310RxQfnBn4MHARQRM6tqzpq9QV5vSxCaMoMT1KH9UJcNAmeZVpKFHTzSerlLpwpZOYAZ1TtS18SzbyxNxAzoR8Q+row4+Kkv3OQUAkIhDXqzJQWMPJKhfaWxeRHq29+VzAD9MdvtFNF9J5QZq7TQKufhmIczUtSluzndCsAwgWutiU1qV2AMcoAY+uPUHELud5kYpuvV44jhOVi6zIcGFR/mSCLcJ4ZM/2VKrAu5OgenKgxH4qsqckgluS4j6gIvbWCC93m48fvxcxStN7JH3PE2CYuRq0abXOsiwMF2FmtjjxSV+eqxQiKC4fVPBpGMJFhXlfe6jbYt9RAlGDZfjhJ9O8FuCGrNm4gtS7MxEE/JgEYFHIxpvw5CWKTkR+EmzU/jO4iFK8nhDsI0lSvapA3jo8USw9Cs3UC1yVoJVBjEJUN/DSZhWV1URoX/hUSyUIf6KVWcHQbS8W+otrc1XmxuFoJ7O/m/llmmHrYIMJ6l9SRo6u+1HOjMJ9NQ8ee+jqWRzl+Pm3q33bsL7zDZr9oXCZvzaz0okNS1Zekx5TZM2I82hRNGs7T4kwX+x+3EW1kRE26xBv176/ndveHq7N8oMH1MjA5Y1cr07vK3O9LkDW67VZ3ad1G7jg8tsuVRTJ4vV9vgfhyzp2lqIoqK7XpsvKNLvbC7y9QupReaquD+BcQTmpgkfai9RJ9xKZ5tFrSktP54QPfsgNfAixIW2yHGBhsbv69f1wd5BmB3LcrqYvmg3kE8CjApIi/AGWcSGSiy0d8yqh/kl2gTOFAql8y46yfwIVyaa7m3R3q14T5od0xr4GNFo0oJkeSp02RejETPYhbSeCav5U1YyVK4kCMR2LGU6SmUu4OwgCr60rcxX5hwSvF0WzDNuOdT22gRFlxlmQa/BdVvsvvk12gIGI5FYJOHcZ77Z1Xce7tQM4EPK/hOkhROAQxbmF/e+hpRF6mB+pdbbHmcJBxIjSCURgAnXX8a9DZ0ijMScUR+3iFz1xUMI0PawCnKuB7G/xG1xvJI2niuBX1PvMP3D1ZLIRO2FN5nMRIu8mc37TVyt62GwCl0CG6GWObhxiSNoL05N1Wv9TNeYqgYb+idJZulMCGTfpP6kZfmxS/0sBPgSxgArfYFIMyLi//yCy3qMc5ShHOcpRjvL/SU5AXpcwKHl7TPJ9fe+rbQi5e3i4uXhVcv3w8On8rdWdfHp4+LJb38Wnd9Q2iNx8Hp+evSq5HX/+evEvV/+nnFyOx9ObnUE7Px3Pzv79+j3I2Xg6vttVI2jS5c2b9erkdDqeTncgfTxCNpuOb3ct5+byPU1ChOPx1beCj0fI3YynlzuGcvF1On04+ffL/0MA4enp9PPNS8EBILy4nI6/NYg7m40v795eGyC8+jSbXr6AOgCEyu14/PXboN1djk+fh5T9uN/zJztAXxUhwuvbHTU4AITslZqePIynt12TL87ubm5u7s6+gWfn113R+beik67o7vr8GSUgnJ1fQy89s9cBIOTOgBxe9BKU9PM1/D3/cjU7vbw8PZ3dPrfv7GE2Oz3Fok9bZ8Kub2fbq75sUaMdnjFQi6ttpx0Cwouv4+nX7Wsc0FNs7Bfwa5ez2eXnMYxJ99HJ7bQrgt/Trb/siPN0NgP2nN4qz0XgXs8+g233g3gICNnNdPp5OyqAdvyAL85mX84uTk4u7gDEVf/hzenNORbdADX1isx9mt1h0fmn6XhLnz1C7gG84nVXcAgIUTOf1RQ0tlNSMLDth9dQ0n948VyEEPvXF9uOOfk0nV52erpFeAFV9h1zEAgvwGy2gwJKOnvtDIF6+lHduf5q/Pk7h3J+NR73PdMj5O6mWx90EAhBTcezrsNPrl75xv5DGI3XLuLk04+goZO6GwFh5wuhoH9xEAi569n4tBuB6/F0NwxnJxfnYGO7w8ouLs7PHr5RU1d0fn4G9vsF3zyPYaf6qBiHgRDU7vITjhMMzu1LWnF+83A1u7wEUn1BeHZzewXeAWjkalvCrr9si8af8P0LQuXLtAuODgMhRtvov5TZ9CXzOYckagr4sO1bhGdgbNuiLUIGoz++3F71GiF22xgczYEgPLvs1PT88/S5NdD06ez25vrs7FlLGcRzl7OHOyh6mPYI2RfAd/UJiq6/Tr9HCCw8nn5hF4eBEBgGBw8avI0nkRtvr7vXd1uE2OCHM2VbdNX9BYBfuoDt5OFHhOwBB/FAEHYGeAI4t2nFCRjRNpRhW4QXEE5vbRRDhCsO9XA6/dT3yM8QchcQLdyAsh4EwuvPYIigq1tYGNpsvcYzQuDGbZTyghA0+bnxP0UIYzydgf4eBELucnp5fXc5vf2mpFufzrZBAMQ2021QA/6wQ3h3unWjvT/8EeEJxoC3B4IQcDzcXp5uYSHC7RiClm0Rjp+nX3A4r7ge4RY0fPoThNw5pNOzw9BS7gy81+X0amdI+tcXQBedtwBX0RsdO//6uUeI0wGdc2Ho3n+GEKOl8YEgBNYYb8MSDlsGfv7h+vzsDqwIPMlJF1xDWHAGRVeXs8vpjEMlnI5Pb6DoZjad/cwOu1mfQ0HIwLamn1+aAkM3xczv8vPD3Wx6icN5DkaFRcCPUHSKV+HQTWdXOP345XL60LkNSJF3AaFyHwZC7vpy2ue+vVx8GX8GOb27wAS5z4MesOTz1d0JmGl/6dnXruj2GsOBjqVOAO4uIPA7h4IQQuqL3Zludn53c3N90X+w3WKHMzcYBnwrOjm7ubnBqZyT57vh76v06+Tl2qMc5ShHOWxxkiQpS/j5ft2x5bxaJSg7WZb8fGn57x4Pcf3l7oUqWf5q8XeeLX667jnPsqdX534or9vJOOOHhn8vteqq0shVfzghxXl18pq9lAJP/dlZRkrxe4d7KTeXX6cvz+IU093pmFhSzZ/0npLNA899dQaWvXvkl2HanDP5rz20Rmw4wcKI7e9HwtnFLBeeI8tx4/244Sqe/N5hf+ezO+56vE2iOGZ6O1+YqT9dbBtJC0u2wt3/8GLvAnIebU7Lf2NBqt5tJWa24+j4rSx2nJhxTuvozvMWKyPtDr3UU5/pqBX42/Id3PAZqZnBujdad/ynDS+Y7uTytsrnhbQdwpeYBREywzDgqxTOMl3HsgwLvp/ZUNHz4tRsgjfLTQbXG/0XIEILV0zLsaJlaiQruG9I8x3HwO+zoMLuU72r+BVC5tT1fRvC5eWmrusIxnCZ1u6qb6BmerjanNkyq/AAtXijG2ZdeY1tVLz3xAyzvW9BZ7TavG/drKxbL4ROqtN7b1sDxGBXd1cvD84QobxqqrptI1YGo/soakxSGdgKr9pqT0ISXG1qGLiru733CqtDmOC/DvLvDcfjUz1vc84o4NtTn5PXuFus9TmWtPfpzjEMHcK4Lmwj8SJOhzGxTdXyR41vrJ7PsvRb3AeLthLiWW3ZRgtr3fLrRHHcTNOK2oc3mWyNPMcI3dS3/8fTlDoz4M2zsl+fXn57QNwhNIXQ1tPUkE03l6PHe1+PU9O2HG97goJlknRV4v1GlepG5K0UY+KwEP8Ng+PFykJ1mAM/Ky8y7GVqKI2QGP4/FTO80IIRkHcRshCPIFPMTMnwlFUj0XzXwROcns+0wr3JeO4Pp7sRJ7shW+HhRprG2W7J+R6aSuIZ2gg0KlafsAW24uJBQ8ZWWc5mV+MHjp3sIkwt7G6bywKLi1RgNg1Xh8tV9nwgRnk/ktS1wvl40D22sUOYatjlMecEwDSuL7eoVtAupWkZDoFiuFADM16NoVyo9X2aBo1lbo93d/BoGM37RiPMLlMe0N2bYHsx2KTUnRwRA0LHbfFmNZbVBSKMuj7mSldNwy1Hnp9+Obmb3tx9Pd9BCOrGSmhqh7A75U1xivta3Wo2ttBy1uKaK7sj94D8rFcIXfzJte6oRs0L5ea+UzKNZcS9T74tpe8RBtlqtQodrUm57v9EO+0OQqN3hUZaAcPVdtFilaUZqCFDhJFn4s2Jpb1CyOIsdbd6foOTFl/Gz4raI2xkHMMdhEbjNtli2SOUy543M9eIfkTo2c8IrQ6hhQirDiFoRp6lpLZ2ESqr7r1us8JDylrH/u4Y+gAFa0kb8LH3WZ1wiq8DgqY2Oi3t2NjwFWsHoa1EFifnfP/vqL4gwpPZ80qGnyNkpQuEpi17LdX+aft/oeNaProulng2IOTCWu5eb7U0l5HVQJdAS/sxlC2sJaLRLkLok5UhO0HIHD7RrNXEfoVQM4PSNuIQ/2mmnLmtBoNe67IBlmQD0yARgLdMX42hrXkrS45H/XlRZ6c3FyfXl5e3579CmLi+oiX8VkvhRWzYTrDm7Nq0Zb9ey2CHoPyOnKeIkADTuDkrWgea0sbPCJXYCzXZ4V9cZ/4YoVF7aQPsD/bspv94aFtg+dbz2b3Arpt/vP5MHEfFKENPvSatQb+Xomnhm00LrmoOeGI8LdYBDi29fxpve7wxuzu9ujq9uZv1DzeUxlW0ptJwMGKumBjQbogm7MozKzPd/mcnOXSDzQb5Cmxm07UOYxob6GJpwqjaEGQhDtvsvp3JKVpY6GrKygUw304b05zOicdh1oWiih+GOuvjUsV5DmKgNEv6bUx6x5wQEWbdiRdGEsmcVULUyvrrZfQqFrAi08PsZZsrg5T+jHHn2zHUHcZ0Hb2dL3MxaJXRbbIxkizSjJcjjOIkC30sZzZ+gA3qmD7zMZZheQK+BQq0KFvAtzMfbd6GymRo7du3iylhfXi7A4cUp/LK/9uTJ/7/HNBxDkc5ylGOcpSjHOUoRznKUY5ylKMc5ShHOcpRjnKUoxzlKEc5ylGOcpSjHOUoRznKUY5ylKMc5Sh7lv8F5wws8hMHzbkAAAAASUVORK5CYII=",
              "createdAt": "2025-04-12T08:09:37.762Z",
              "updatedAt": "2025-04-12T08:09:37.762Z",
              "__v": 0
            }
          ]
        };

        if (experienceData && experienceData.allExperiences) {
          setDynamicExperience(experienceData.allExperiences);
        } else {
          throw new Error("Invalid experience data format");
        }
      } catch (error) {
        console.error("Error fetching experience:", error.message);
        setDynamicExperience([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, []);

  return (
    <div className="experience-section">
      <h2 className="experience-title">Professional Experience</h2>
      {loading ? (
        <div className="experience-loader">Loading...</div>
      ) : (
        <div className="experience-grid">
          {dynamicExperience.map((exp) => (
            // <Link to={`/ibm/`} key={exp._id} className="experience-card">
            <Link key={exp._id} className="experience-card">
            <div className="experience-card" key={exp._id}>
              <div className="experience-logo">
                <img
                  src={
                    exp.companylogo.includes("fakepath")
                      ? "https://dummyimage.com/80x80/cccccc/000000&text=Logo"
                      : exp.companylogo
                  }
                  alt={exp.experinceCompany}
                />
              </div>
              <div className="experience-details">
                <h3>{exp.experinceCompany}</h3>
                <p className="experience-dates">
                  {new Date(exp.startdateL).toLocaleDateString()} -{" "}
                  {new Date(exp.enddateL).toLocaleDateString()}
                </p>
                <p className="experience-role">{exp.experinceResponsibilities}</p>
              </div>
            </div>
            </Link>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
