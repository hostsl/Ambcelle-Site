import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
import {Carousel} from "flowbite-react";
dynamic(import("tw-elements"), {ssr: false});
// import 'tw-elements';

export default function Home() {
  return (
    <div>
      <div className={"w-full bg-white h-[126px]"}>
        <div className={"float-left ml-[50px] mt-[10px]"}>
            <button type="button"
                    className="focus:outline-none text-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"><img className={"h-24"} src="/assets/Ambhelle-logo 1.png"  alt="service1"/>
            </button>
        </div>
        <div className={"float-right mr-[50px]  mt-[40px]"}>
            <button type="button"
                    className="focus:outline-none text-black bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Home
            </button>

            <button type="button"
                    className="focus:outline-none text-black bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Job
            </button>

            <button type="button"
                    className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">LOGIN
            </button>

        </div>
      </div>
        <div className={"w-full h-[751px]"}>

            {/*Carousel*/}
            <div className="h-full">

                <div id="carouselExampleSlidesOnly" className="carousel slide relative carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner relative w-full overflow-hidden h-full">
                        <div className="carousel-item active relative float-left w-full h-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                                className="block w-full"
                                alt="Wild Landscape"
                                height={755}
                            />
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                                className="block w-full"
                                alt="Camera"
                                height={755}
                            />
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                className="block w-full"
                                alt="Exotic Fruits"
                                height={755}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div className="grid grid-cols-2 bg-white ">
            <div className="col-span-2 h-[150px] h-full mt-[20px] mb-20 flex h-[40px] justify-center">
                <h1 className={"leading-[96px] font-semibold text-[64px]"}>OUR SERVICES</h1>

            </div>

            {/*Left Column*/}
            <div className="w-full pl-[250px] pr-32 h-full flex flex-col">

                <div className={"mb-[40px]"}>

                    <img src="/assets/Moneygram - png.png" height={20} width={200} alt="Moneygram"/>
                    <h3 className={"text-[24px] leading-[29.05px] mt-12"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pellentesque viverra mauris neque cursus egestas. Tempor eros, et maecenas elementum congue
                    </h3>

                </div>
                <div className={"mb-[40px]"}>
                    <img src="/assets/Ria_LOGO-preview 1.png" className={"mt-8"} alt="Ria"/>
                    <h3 className={"text-[24px] leading-[29.05px] mt-12"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pellentesque viverra mauris neque cursus egestas. Tempor eros, et maecenas elementum congue
                    </h3>
                </div>
                <div>
                    <img className={"w-full"} src="/assets/undraw_Transfer_money_re_6o1h 1.png" alt="undraw Transfer"/>

                </div>

            </div>

            {/*Right Column*/}
            <div className=" mr-36" >

                <div className={"mb-[40px] pl-[150px] pr-[40px]"}>

                    <img src="/assets/Western Union - png 0.png" height={80} width={200} alt="Western Union"/>
                    <h3 className={"text-[24px] leading-[29.05px] mt-12"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pellentesque viverra mauris neque cursus egestas. Tempor eros, et maecenas elementum congue
                    </h3>

                </div>
                <div className={"mb-[40px] pl-[150px] pr-[40px]"}>
                    <img src="/assets/Afro 1.png" className={"h-32"} alt="Afro"/>
                    <h3 className={"text-[24px] leading-[29.05px] mt-12"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pellentesque viverra mauris neque cursus egestas. Tempor eros, et maecenas elementum congue
                    </h3>
                </div>
                <div className={"ml-[50px] mt-40 mb-[150px]"}>
                    <img src="/assets/Ambchelle Money.png" className={"h-[50px]"} alt="service1"/>
                    <h3 className={"text-[24px] leading-[29.05px] mt-12"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pellentesque viverra mauris neque cursus egestas. Tempor eros, et maecenas elementum congue
                    </h3>
                </div>

            </div>

        </div>

        <div className={"w-full static  h-[570px] grid grid-cols-2"}>
            <div className={"bg-white"}>

                <iframe className={"float-right rounded-[27px] border-black border-2 shadow-2xl shadow-black"}

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.195086463457!2d-13.236152299999999!3d8.4804031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x422f3d1cd4598099!2sPademba%20Rd%2C%20Freetown!5e0!3m2!1sen!2ssl!4v1656241614510!5m2!1sen!2ssl" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" height={530} width={668}></iframe>
                <div className={"bg-[#1AB8C0] h-[530px] mt-[40px]"}>

            </div>
            </div>


            <div className={ "h-full"}>

                <div className={"flex flex-col bg-[#1AB8C0] h-[530px] pl-[100px] mt-[40px]"}>
                    <h1 className={"flex mt-[80px] ml-4 text-[50px] leading-[58.59px] font-semibold"}>
                        CONTACT US</h1>
                    <div className={"flex items-center justify-start mt-[30px]"}>
                        <svg className={"inline"} width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.375 0H4.125C3.03098 0 1.98177 0.434597 1.20818 1.20818C0.434597 1.98177 0 3.03098 0 4.125V17.875C0 18.969 0.434597 20.0182 1.20818 20.7918C1.98177 21.5654 3.03098 22 4.125 22H23.375C24.469 22 25.5182 21.5654 26.2918 20.7918C27.0654 20.0182 27.5 18.969 27.5 17.875V4.125C27.5 3.03098 27.0654 1.98177 26.2918 1.20818C25.5182 0.434597 24.469 0 23.375 0ZM23.375 2.75L14.4375 8.89625C14.2285 9.01693 13.9914 9.08046 13.75 9.08046C13.5086 9.08046 13.2715 9.01693 13.0625 8.89625L4.125 2.75H23.375Z" fill="white"/>
                        </svg>

                        <span className={"leading-[27.84px] font-bold text-[27px] ml-[20px]"}>info@ambchelle.com</span>
                    </div>



                    <div className={"mt-[20px]"}>
                        <svg className={"inline"} width="28" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3342 15.6353L15.0564 13.7401C15.2883 13.488 15.5818 13.3154 15.9012 13.2433C16.2205 13.1712 16.552 13.2027 16.8555 13.334L18.9544 14.2562C19.261 14.3931 19.5239 14.6269 19.71 14.928C19.8961 15.2292 19.997 15.5842 20 15.9483V20.1786C19.9982 20.4263 19.9509 20.6711 19.8609 20.8981C19.7709 21.1252 19.6401 21.3298 19.4763 21.4998C19.3125 21.6697 19.1192 21.8015 18.9079 21.887C18.6967 21.9726 18.4719 22.0102 18.2471 21.9976C3.5392 20.9908 0.57149 7.28462 0.010239 2.03904C-0.0158147 1.78145 0.00798984 1.5207 0.0800864 1.27396C0.152183 1.02721 0.270938 0.800064 0.428538 0.607453C0.586138 0.414841 0.779012 0.261133 0.994471 0.156441C1.20993 0.0517482 1.44309 -0.00155604 1.67862 3.45777e-05H5.3921C5.72347 0.00111397 6.04698 0.111264 6.321 0.316317C6.59503 0.52137 6.80704 0.811949 6.92977 1.15068L7.7678 3.46043C7.89101 3.79299 7.92245 4.15812 7.85818 4.51023C7.79391 4.86233 7.63679 5.1858 7.40645 5.44021L5.68426 7.33539C5.68426 7.33539 6.67606 14.7215 13.3342 15.6353Z" fill="white"/>
                        </svg>
                        <span className={"leading-[27.84px] font-bold text-[27px] ml-[20px]"}>+2327777777 / +232888888</span> </div>
                    <div className={"mt-[20px]"}>
                        <svg className={"inline"} width="28" height="22" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99998 25C8.19561 23.5039 6.52312 21.8638 4.99999 20.0968C2.71428 17.4431 1.25556e-06 13.4911 1.25556e-06 9.7252C-0.000990025 7.80191 0.585012 5.92156 1.68384 4.32212C2.78268 2.72269 4.34495 1.47606 6.17294 0.740005C8.00093 0.00395307 10.0125 -0.188435 11.953 0.187188C13.8935 0.562811 15.6758 1.48956 17.0742 2.85015C18.0053 3.75117 18.7433 4.82274 19.2455 6.00283C19.7477 7.18293 20.0041 8.44813 19.9999 9.7252C19.9999 13.4911 17.2857 17.4431 15 20.0968C13.4768 21.8638 11.8043 23.5039 9.99998 25ZM9.99998 5.55935C8.86334 5.55935 7.77325 5.99825 6.96953 6.7795C6.1658 7.56075 5.71427 8.62035 5.71427 9.7252C5.71427 10.8301 6.1658 11.8897 6.96953 12.6709C7.77325 13.4522 8.86334 13.8911 9.99998 13.8911C11.1366 13.8911 12.2267 13.4522 13.0304 12.6709C13.8342 11.8897 14.2857 10.8301 14.2857 9.7252C14.2857 8.62035 13.8342 7.56075 13.0304 6.7795C12.2267 5.99825 11.1366 5.55935 9.99998 5.55935Z" fill="white"/>
                        </svg>
                        <span className={"leading-[27.84px] font-bold text-[27px] ml-[20px]"}> 88 Pademba Road, Freetown <br />
 <span className={"ml-[56px]"}>Head Quater</span> </span> </div>
                    <div className={"mt-[20px]"}>
                        <svg className={"inline"} width="28" height="22" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99998 25C8.19561 23.5039 6.52312 21.8638 4.99999 20.0968C2.71428 17.4431 1.25556e-06 13.4911 1.25556e-06 9.7252C-0.000990025 7.80191 0.585012 5.92156 1.68384 4.32212C2.78268 2.72269 4.34495 1.47606 6.17294 0.740005C8.00093 0.00395307 10.0125 -0.188435 11.953 0.187188C13.8935 0.562811 15.6758 1.48956 17.0742 2.85015C18.0053 3.75117 18.7433 4.82274 19.2455 6.00283C19.7477 7.18293 20.0041 8.44813 19.9999 9.7252C19.9999 13.4911 17.2857 17.4431 15 20.0968C13.4768 21.8638 11.8043 23.5039 9.99998 25ZM9.99998 5.55935C8.86334 5.55935 7.77325 5.99825 6.96953 6.7795C6.1658 7.56075 5.71427 8.62035 5.71427 9.7252C5.71427 10.8301 6.1658 11.8897 6.96953 12.6709C7.77325 13.4522 8.86334 13.8911 9.99998 13.8911C11.1366 13.8911 12.2267 13.4522 13.0304 12.6709C13.8342 11.8897 14.2857 10.8301 14.2857 9.7252C14.2857 8.62035 13.8342 7.56075 13.0304 6.7795C12.2267 5.99825 11.1366 5.55935 9.99998 5.55935Z" fill="white"/>
                        </svg>
                        <span className={"leading-[27.84px] font-bold text-[27px] ml-[20px]"}>121 Regent Road, Freetown <br />
<span className={"ml-[52px]"}>Branch</span> </span> </div>
                </div>

            </div>
        </div>

        <div className={"w-full bg-black flex h-[151px] items-center grid grid-cols-2"}>
            <div className={"flex-col items-center text-white ml-20"}>
                <h1 className={"leading-[32.68px] font-bold text-[27px]"}>Ambchelle Foreign Exchange</h1>
                <h1 className={"leading-[32.68px] font-bold text-[27px]"}>Bureau</h1>
                <h1 className={"leading-[24.2px] font-normal text-[20px]"}>&#169; 2022</h1>
            </div>
            <div className={"flex text-white items-center justify-center mt-[40px]"}>

                    <div className="mr-8"><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 15.6953C0 23.4551 5.9042 29.9077 13.6261 31.2162V19.9433H9.53829V15.6081H13.6261V12.1392C13.6261 8.23718 16.2601 6.07025 19.9854 6.07025C21.1655 6.07025 22.4381 6.24324 23.6182 6.41623V10.4054H21.5293C19.5303 10.4054 19.0766 11.3588 19.0766 12.5736V15.6081H23.4369L22.7107 19.9433H19.0766V31.2162C26.7985 29.9077 32.7027 23.4564 32.7027 15.6953C32.7027 7.06267 25.3446 0 16.3514 0C7.35811 0 0 7.06267 0 15.6953Z" fill="#FFD233"/>
                    </svg>

                    </div>
                    <div className="mr-8"><svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.8243 3.79745C36.4577 4.42254 34.9896 4.8449 33.4462 5.03581C35.0387 4.05221 36.2301 2.50413 36.7981 0.680432C35.3019 1.59778 33.6644 2.24349 31.9568 2.5895C30.8085 1.32388 29.2875 0.485008 27.63 0.203121C25.9725 -0.0787657 24.2712 0.212105 22.7902 1.03057C21.3093 1.84904 20.1315 3.14932 19.4398 4.72952C18.7482 6.30973 18.5812 8.08145 18.965 9.76962C15.9333 9.6125 12.9676 8.79912 10.2602 7.38228C7.55284 5.96544 5.16432 3.9768 3.24968 1.54543C2.59501 2.71114 2.21858 4.06269 2.21858 5.5021C2.21785 6.79789 2.52698 8.07383 3.11855 9.21672C3.71011 10.3596 4.56582 11.3341 5.60975 12.0537C4.39907 12.014 3.2151 11.6763 2.15639 11.0688V11.1702C2.15626 12.9876 2.76528 14.749 3.8801 16.1557C4.99491 17.5624 6.54686 18.5276 8.27261 18.8875C7.1495 19.2013 5.97201 19.2475 4.82906 19.0227C5.31597 20.5865 6.26441 21.9539 7.54162 22.9336C8.81883 23.9133 10.3609 24.4562 11.9518 24.4863C9.25107 26.6749 5.91563 27.862 2.48208 27.8568C1.87387 27.8569 1.26616 27.8203 0.662109 27.747C4.14735 30.0601 8.20443 31.2877 12.3479 31.283C26.3741 31.283 34.0419 19.2913 34.0419 8.89111C34.0419 8.55323 34.0338 8.21196 34.019 7.87407C35.5105 6.76069 36.7979 5.38197 37.821 3.80252L37.8243 3.79745Z" fill="#F8BD19"/>
                    </svg>

                    </div>
                    <div className="mr-8"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3917 8.54464C10.1542 8.54464 8.32816 10.3707 8.32816 12.6082C8.32816 14.8458 10.1542 16.6719 12.3917 16.6719C14.6293 16.6719 16.4553 14.8458 16.4553 12.6082C16.4553 10.3707 14.6293 8.54464 12.3917 8.54464ZM24.5794 12.6082C24.5794 10.9255 24.5947 9.25798 24.5002 7.57827C24.4057 5.62725 23.9606 3.89572 22.5339 2.46904C21.1042 1.0393 19.3757 0.597277 17.4247 0.502774C15.742 0.408272 14.0745 0.423514 12.3948 0.423514C10.712 0.423514 9.04454 0.408272 7.36485 0.502774C5.41384 0.597277 3.68232 1.04235 2.25564 2.46904C0.825922 3.89877 0.383897 5.62725 0.289395 7.57827C0.194893 9.26103 0.210135 10.9285 0.210135 12.6082C0.210135 14.288 0.194893 15.9585 0.289395 17.6382C0.383897 19.5892 0.82897 21.3208 2.25564 22.7475C3.68537 24.1772 5.41384 24.6192 7.36485 24.7137C9.04759 24.8082 10.7151 24.793 12.3948 24.793C14.0775 24.793 15.745 24.8082 17.4247 24.7137C19.3757 24.6192 21.1073 24.1741 22.5339 22.7475C23.9637 21.3177 24.4057 19.5892 24.5002 17.6382C24.5977 15.9585 24.5794 14.291 24.5794 12.6082ZM12.3917 18.8607C8.93175 18.8607 6.13937 16.0683 6.13937 12.6082C6.13937 9.14823 8.93175 6.35583 12.3917 6.35583C15.8517 6.35583 18.6441 9.14823 18.6441 12.6082C18.6441 16.0683 15.8517 18.8607 12.3917 18.8607ZM18.9002 7.55998C18.0923 7.55998 17.44 6.90761 17.44 6.09976C17.44 5.29192 18.0923 4.63955 18.9002 4.63955C19.708 4.63955 20.3604 5.29192 20.3604 6.09976C20.3606 6.29159 20.323 6.48158 20.2497 6.65885C20.1764 6.83612 20.0689 6.99719 19.9332 7.13283C19.7976 7.26847 19.6365 7.37602 19.4593 7.44932C19.282 7.52262 19.092 7.56022 18.9002 7.55998Z" fill="#FFD233"/>
                    </svg>
                    </div>

            </div>
        </div>
    </div>

  )
}
