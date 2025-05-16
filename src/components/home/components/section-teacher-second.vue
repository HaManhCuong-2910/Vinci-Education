<template>
  <section class="py-16 bg-yellow-300">
    <div class="container mx-auto">
      <h3 class="lg:text-4xl text-3xl font-bold text-black-400 text-center">
        Đội Ngũ Trợ Giảng Tài Ba Hỗ Trợ Đắc Lực Cho Bạn
      </h3>
      <p class="mt-4 text-center lg:text-base text-sm">
        Đội ngũ trợ giảng gồm các anh chị là sinh viên các trường Đại học nổi
        tiếng <br />
        trên cả nước và đạt 110+ trong kì thi ĐGNL năm 2022, 2023.
      </p>
    </div>

    <div class="mt-16">
      <div ref="container" class="keen-slider container mx-auto cursor-pointer">
        <div
          v-for="(item, index) in dataShow"
          :key="index"
          class="keen-slider__slide"
        >
          <div
            class="w-full rounded-2xl overflow-hidden relative aspect-[251/314] watch-result"
          >
            <img :src="item.avatar" alt="teacher" class="w-full h-full" />
            <div
              class="absolute bottom-3 left-3 bg-[#21262D] bg-opacity-40 backdrop-blur-[32px] py-[6px] px-3 flex items-center space-x-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="rgba(255, 255, 255, 0.8)"
              >
                <path
                  d="M16.2503 14.5235V17.5469C16.2503 17.6752 16.1912 17.7963 16.0901 17.8753C15.9889 17.9543 15.8571 17.9822 15.7326 17.9511L14.7858 17.7144C14.6531 17.6813 14.5142 17.6813 14.3815 17.7144L13.4347 17.9511C13.3102 17.9822 13.1784 17.9543 13.0772 17.8753C12.9761 17.7963 12.917 17.6752 12.917 17.5469V14.5234"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <circle
                  cx="14.5837"
                  cy="12.1305"
                  r="2.91667"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle>
                <path
                  d="M10 15.8802H4.16667C3.24619 15.8802 2.5 15.134 2.5 14.2135V4.21354C2.5 3.29307 3.24619 2.54688 4.16667 2.54688H15.8333C16.7538 2.54688 17.5 3.29307 17.5 4.21354V7.54687"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.83301 6.29655H13.333"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.83301 9.21354H9.16634"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.83301 12.1305H8.33301"
                  stroke="white"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p class="text-sm text-white font-medium">
                {{ item.point }} IELTS Overall
              </p>
            </div>

            <div
              class="button-absolute"
              @click="
                () => {
                  dataDialog.isShowDialog = true;
                  dataDialog.name = item.name;
                  dataDialog.school = item.school;
                  dataDialog.cer = item.cer;
                }
              "
            >
              <img :src="item.cer" class="w-full" />
            </div>
          </div>
          <div class="mt-4 px-3">
            <p
              class="text-black-400 font-semibold flex items-center lg:text-lg text-base"
            >
              {{ item.name }}
              <svg
                width="23"
                height="24"
                viewBox="0 0 31 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 13.6826C3.5 7.0552 8.87258 1.68262 15.5 1.68262C22.1274 1.68262 27.5 7.0552 27.5 13.6826C27.5 20.31 22.1274 25.6826 15.5 25.6826C8.87258 25.6826 3.5 20.31 3.5 13.6826Z"
                  fill="url(#paint0_linear_7234_1063)"
                ></path>
                <g opacity="0.7" filter="url(#filter0_df_7234_1063)">
                  <circle
                    cx="15.5"
                    cy="15.6826"
                    r="7"
                    fill="black"
                    fill-opacity="0.5"
                    shape-rendering="crispEdges"
                  ></circle>
                </g>
                <g filter="url(#filter1_ii_7234_1063)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5003 5.34929C15.0653 5.34929 14.7109 5.53232 14.3884 5.77842C14.0863 6.00889 13.7531 6.34211 13.3633 6.73196L13.3633 6.73197L13.3633 6.73198L13.3358 6.7594C12.9369 7.15836 12.5891 7.31538 12.0523 7.31538C11.9851 7.31538 11.9002 7.31299 11.8043 7.31029C11.5585 7.30338 11.2406 7.29443 10.9625 7.31849C10.5556 7.35368 10.0471 7.46502 9.66114 7.8542C9.27815 8.24042 9.16953 8.74683 9.13539 9.15114C9.11212 9.42677 9.12106 9.74232 9.12797 9.98632V9.98633L9.12797 9.98634C9.13069 10.0825 9.1331 10.1675 9.1331 10.2346C9.1331 10.7714 8.97607 11.1192 8.57709 11.5182L8.54968 11.5456C8.15982 11.9354 7.8266 12.2686 7.59612 12.5706C7.35003 12.8932 7.167 13.2476 7.16699 13.6826C7.167 14.1176 7.35003 14.472 7.59613 14.7946C7.82664 15.0967 8.15994 15.43 8.5499 15.8199L8.57711 15.8471C8.83577 16.1057 8.95778 16.2735 9.02693 16.4318C9.09427 16.5859 9.1331 16.7811 9.1331 17.1306C9.1331 17.1979 9.13071 17.2828 9.12801 17.3786C9.1211 17.6244 9.11215 17.9423 9.13621 18.2205C9.1714 18.6274 9.28275 19.1359 9.67195 19.5218C10.0582 19.9048 10.5646 20.0134 10.9689 20.0475C11.2445 20.0708 11.56 20.0619 11.804 20.055H11.804H11.804C11.9002 20.0522 11.9852 20.0498 12.0523 20.0498C12.3943 20.0498 12.5866 20.0842 12.7379 20.1467C12.8891 20.2091 13.0508 20.3207 13.2943 20.5643C13.3463 20.6163 13.4149 20.6898 13.494 20.7746L13.494 20.7746C13.6722 20.9656 13.904 21.214 14.1204 21.4032C14.449 21.6904 14.9201 22.0159 15.5003 22.016C16.0806 22.0159 16.5517 21.6904 16.8802 21.4032C17.0967 21.214 17.3284 20.9656 17.5067 20.7745C17.5858 20.6898 17.6543 20.6163 17.7063 20.5643C17.9499 20.3207 18.1116 20.2091 18.2628 20.1467C18.4141 20.0842 18.6063 20.0498 18.9483 20.0498C19.0154 20.0498 19.1005 20.0522 19.1966 20.055H19.1966H19.1966C19.4406 20.0619 19.7562 20.0708 20.0318 20.0475C20.4361 20.0134 20.9425 19.9048 21.3287 19.5218C21.7179 19.1359 21.8292 18.6274 21.8644 18.2205C21.8885 17.9423 21.8796 17.6244 21.8726 17.3786L21.8726 17.3782C21.8699 17.2825 21.8676 17.1978 21.8676 17.1306C21.8676 16.7811 21.9064 16.5859 21.9737 16.4318C22.0429 16.2735 22.1649 16.1057 22.4235 15.8471L22.4508 15.8199C22.8407 15.43 23.174 15.0967 23.4045 14.7946C23.6506 14.472 23.8337 14.1176 23.8337 13.6826C23.8337 13.2476 23.6506 12.8932 23.4045 12.5706C23.1741 12.2686 22.8408 11.9354 22.451 11.5456L22.4236 11.5182C22.1649 11.2595 22.0429 11.0918 21.9737 10.9334C21.9064 10.7793 21.8676 10.5841 21.8676 10.2346C21.8676 10.1674 21.8699 10.0827 21.8726 9.98698L21.8726 9.98657C21.8796 9.74082 21.8885 9.4229 21.8644 9.14475C21.8293 8.73789 21.7179 8.22939 21.3288 7.84345C20.9425 7.46044 20.4361 7.35181 20.0318 7.31767C19.7562 7.2944 19.4406 7.30334 19.1966 7.31025C19.1005 7.31297 19.0154 7.31538 18.9483 7.31538C18.4114 7.31538 18.0637 7.15829 17.6648 6.7594L17.6374 6.73199L17.6374 6.73197C17.2476 6.34211 16.9144 6.00889 16.6123 5.77842C16.2898 5.53232 15.9353 5.34929 15.5003 5.34929ZM18.1841 12.4323C18.5638 12.2346 18.7113 11.7664 18.5135 11.3867C18.3158 11.007 17.8476 10.8595 17.4679 11.0573C16.361 11.6338 15.4578 12.7375 14.8611 13.6078C14.6929 13.853 14.5434 14.0882 14.4149 14.3007C14.3271 14.2264 14.2425 14.1597 14.1644 14.1009C13.9975 13.9752 13.8474 13.8761 13.7378 13.8077L13.5461 13.6944L13.5448 13.6937C13.1686 13.4894 12.698 13.6287 12.4936 14.0049C12.2893 14.381 12.4288 14.8517 12.8048 15.0561C12.9163 15.1266 13.1577 15.2819 13.2318 15.3394C13.4904 15.5341 13.7539 15.7786 13.9137 16.0331C14.0639 16.2722 14.3322 16.4107 14.6141 16.3947C14.8959 16.3787 15.1468 16.2106 15.269 15.9562C15.3087 15.8763 15.4093 15.6789 15.4948 15.528C15.646 15.256 15.8659 14.8839 16.1397 14.4845C16.7058 13.6591 17.4306 12.8248 18.1841 12.4323Z"
                    fill="#B6732F"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5003 5.34929C15.0653 5.34929 14.7109 5.53232 14.3884 5.77842C14.0863 6.00889 13.7531 6.34211 13.3633 6.73196L13.3633 6.73197L13.3633 6.73198L13.3358 6.7594C12.9369 7.15836 12.5891 7.31538 12.0523 7.31538C11.9851 7.31538 11.9002 7.31299 11.8043 7.31029C11.5585 7.30338 11.2406 7.29443 10.9625 7.31849C10.5556 7.35368 10.0471 7.46502 9.66114 7.8542C9.27815 8.24042 9.16953 8.74683 9.13539 9.15114C9.11212 9.42677 9.12106 9.74232 9.12797 9.98632V9.98633L9.12797 9.98634C9.13069 10.0825 9.1331 10.1675 9.1331 10.2346C9.1331 10.7714 8.97607 11.1192 8.57709 11.5182L8.54968 11.5456C8.15982 11.9354 7.8266 12.2686 7.59612 12.5706C7.35003 12.8932 7.167 13.2476 7.16699 13.6826C7.167 14.1176 7.35003 14.472 7.59613 14.7946C7.82664 15.0967 8.15994 15.43 8.5499 15.8199L8.57711 15.8471C8.83577 16.1057 8.95778 16.2735 9.02693 16.4318C9.09427 16.5859 9.1331 16.7811 9.1331 17.1306C9.1331 17.1979 9.13071 17.2828 9.12801 17.3786C9.1211 17.6244 9.11215 17.9423 9.13621 18.2205C9.1714 18.6274 9.28275 19.1359 9.67195 19.5218C10.0582 19.9048 10.5646 20.0134 10.9689 20.0475C11.2445 20.0708 11.56 20.0619 11.804 20.055H11.804H11.804C11.9002 20.0522 11.9852 20.0498 12.0523 20.0498C12.3943 20.0498 12.5866 20.0842 12.7379 20.1467C12.8891 20.2091 13.0508 20.3207 13.2943 20.5643C13.3463 20.6163 13.4149 20.6898 13.494 20.7746L13.494 20.7746C13.6722 20.9656 13.904 21.214 14.1204 21.4032C14.449 21.6904 14.9201 22.0159 15.5003 22.016C16.0806 22.0159 16.5517 21.6904 16.8802 21.4032C17.0967 21.214 17.3284 20.9656 17.5067 20.7745C17.5858 20.6898 17.6543 20.6163 17.7063 20.5643C17.9499 20.3207 18.1116 20.2091 18.2628 20.1467C18.4141 20.0842 18.6063 20.0498 18.9483 20.0498C19.0154 20.0498 19.1005 20.0522 19.1966 20.055H19.1966H19.1966C19.4406 20.0619 19.7562 20.0708 20.0318 20.0475C20.4361 20.0134 20.9425 19.9048 21.3287 19.5218C21.7179 19.1359 21.8292 18.6274 21.8644 18.2205C21.8885 17.9423 21.8796 17.6244 21.8726 17.3786L21.8726 17.3782C21.8699 17.2825 21.8676 17.1978 21.8676 17.1306C21.8676 16.7811 21.9064 16.5859 21.9737 16.4318C22.0429 16.2735 22.1649 16.1057 22.4235 15.8471L22.4508 15.8199C22.8407 15.43 23.174 15.0967 23.4045 14.7946C23.6506 14.472 23.8337 14.1176 23.8337 13.6826C23.8337 13.2476 23.6506 12.8932 23.4045 12.5706C23.1741 12.2686 22.8408 11.9354 22.451 11.5456L22.4236 11.5182C22.1649 11.2595 22.0429 11.0918 21.9737 10.9334C21.9064 10.7793 21.8676 10.5841 21.8676 10.2346C21.8676 10.1674 21.8699 10.0827 21.8726 9.98698L21.8726 9.98657C21.8796 9.74082 21.8885 9.4229 21.8644 9.14475C21.8293 8.73789 21.7179 8.22939 21.3288 7.84345C20.9425 7.46044 20.4361 7.35181 20.0318 7.31767C19.7562 7.2944 19.4406 7.30334 19.1966 7.31025C19.1005 7.31297 19.0154 7.31538 18.9483 7.31538C18.4114 7.31538 18.0637 7.15829 17.6648 6.7594L17.6374 6.73199L17.6374 6.73197C17.2476 6.34211 16.9144 6.00889 16.6123 5.77842C16.2898 5.53232 15.9353 5.34929 15.5003 5.34929ZM18.1841 12.4323C18.5638 12.2346 18.7113 11.7664 18.5135 11.3867C18.3158 11.007 17.8476 10.8595 17.4679 11.0573C16.361 11.6338 15.4578 12.7375 14.8611 13.6078C14.6929 13.853 14.5434 14.0882 14.4149 14.3007C14.3271 14.2264 14.2425 14.1597 14.1644 14.1009C13.9975 13.9752 13.8474 13.8761 13.7378 13.8077L13.5461 13.6944L13.5448 13.6937C13.1686 13.4894 12.698 13.6287 12.4936 14.0049C12.2893 14.381 12.4288 14.8517 12.8048 15.0561C12.9163 15.1266 13.1577 15.2819 13.2318 15.3394C13.4904 15.5341 13.7539 15.7786 13.9137 16.0331C14.0639 16.2722 14.3322 16.4107 14.6141 16.3947C14.8959 16.3787 15.1468 16.2106 15.269 15.9562C15.3087 15.8763 15.4093 15.6789 15.4948 15.528C15.646 15.256 15.8659 14.8839 16.1397 14.4845C16.7058 13.6591 17.4306 12.8248 18.1841 12.4323Z"
                    fill="url(#paint1_linear_7234_1063)"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_df_7234_1063"
                    x="0.326063"
                    y="0.50868"
                    width="30.3479"
                    height="31.3696"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="4.08697"></feOffset>
                    <feGaussianBlur stdDeviation="2.55436"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_7234_1063"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_7234_1063"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="4.08697"
                      result="effect2_foregroundBlur_7234_1063"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter1_ii_7234_1063"
                    x="6.16699"
                    y="5.34929"
                    width="17.667"
                    height="18.6667"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.53 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_7234_1063"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dx="-1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.53 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_7234_1063"
                      result="effect2_innerShadow_7234_1063"
                    ></feBlend>
                  </filter>
                  <linearGradient
                    id="paint0_linear_7234_1063"
                    x1="3.5"
                    y1="6.04625"
                    x2="27.5"
                    y2="21.319"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF7B7D"></stop>
                    <stop offset="1" stop-color="#F7390E"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_7234_1063"
                    x1="7.16699"
                    y1="8.37959"
                    x2="23.8337"
                    y2="18.9857"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFE100"></stop>
                    <stop offset="1" stop-color="#FFA200"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </p>
            <p class="text-black-300 mt-2 text-sm">
              {{ item.school }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      v-model="dataDialog.isShowDialog"
      align-center
      :show-close="false"
      :width="'500px'"
      :class="'max-w-[90%] !rounded-xl'"
      :header-class="'!pb-0'"
      :lock-scroll="false"
    >
      <div class="relative">
        <button class="button-close" @click="dataDialog.isShowDialog = false">
          <svg
            size="24"
            width="24"
            height="24"
            class="Icon__StyledIcon-sc-17nvvtn-0 hhUpwk"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M17.6 6.4L6.4 17.6m11.2 0L6.4 6.4"
            ></path>
          </svg>
        </button>
        <img :src="dataDialog.cer" loading="lazy" alt="image" />
        <div class="mt-4">
          <p class="lg:text-2xl text-base font-semibold text-black-400">
            {{ dataDialog.name }}
          </p>
          <p class="text-black-300 line-clamp-1 mt-1">
            {{ dataDialog.school }}
          </p>
        </div>
      </div>
    </el-dialog>
  </section>
</template>

<script setup lang="ts">
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/vue.es";

const [container] = useKeenSlider({
  loop: true,
  mode: "free",
  slides: {
    origin: "center",
    perView: 5,
    spacing: 15,
  },
  breakpoints: {
    "(max-width: 600px)": {
      slides: { perView: 1, origin: "center", spacing: 15 },
    },
    "(min-width: 601px)": {
      slides: { perView: 5, origin: "center", spacing: 15 },
    },
  },
});

const dataDialog = ref({
  isShowDialog: false,
  name: "",
  school: "",
  cer: "",
});

const dataShow = ref([
  {
    avatar: "/images/tro-giang-le-minh-duc.jpg",
    point: 8.5,
    name: "Lê Minh Đức",
    school: "Đỗ xét tuyển ĐH Bách Khoa Hà Nội",
    cer: "/images/cer-le-minh-duc.jpg",
  },
]);
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";

.keen-slider {
  position: relative;

  @include mediaMobileTabletTo1280 {
    &::before {
      display: none;
    }
    &::after {
      display: none;
    }
  }

  &::before {
    left: 0px;
    background: linear-gradient(
      to right,
      rgb(255, 249, 241) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    position: absolute;
    top: 0px;
    width: 140px;
    height: 100%;
    z-index: 1;
    transition: 400ms;
    pointer-events: none;
  }

  &::after {
    right: 0px;
    background: linear-gradient(
      to left,
      rgb(255, 249, 241) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    position: absolute;
    top: 0px;
    width: 140px;
    height: 100%;
    z-index: 1;
    transition: 400ms;
    pointer-events: none;
  }
}

.watch-result {
  &::after {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }

  &:hover {
    &::after {
      opacity: 1;
      visibility: visible;
    }

    .button-absolute {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: 0.3s;
    }
  }

  .button-absolute {
    background-color: transparent;
    color: rgb(255, 255, 255);
    border: 0px;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    font: inherit;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    transform: translateY(100%);
  }
}

.border-custom {
  border: 1px solid rgb(227, 231, 237);
}
.button-close {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  padding: 8px;
  background-color: white;
  color: black;
  border: 0px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
}
</style>
