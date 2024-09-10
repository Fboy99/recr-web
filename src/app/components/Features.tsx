import Image from "next/image";
import FeatureList from "./FeatureIcon";
import SectionBanner from "./SectionBanner";


export function Features() {
  return (
    // <div className="flex flex-col justify-center max-w-[1040px] gap-y-[32px] py-[32px] lg:py-[80] lg:gap-y-[80px] items-center">
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-[1040px]">
      <SectionBanner
        title="Opportunity Card Germany"
        // className="w-[1040px] h-[256px] px-[96px] py-[48px]"
      />

      {/* Existing Content */}
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse gap-y-[48px] items-center justify-center">
        <FeatureList />
        <div className="sm:w-1/2 lg:py-[32px] lg:pr-[32px] flex flex-col">
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">
            What is opportunity card?
          </h1>
          <Image
            src="/assets/image1.jpeg"
            alt="feature 1 image"
            width={496}
            height={408}
            className="pt-[24px] sm:hidden rounded-[28px] opacity-100"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam eos similique debitis mollitia quaerat rem nihil quas? Laboriosam est cumque repellendus eaque illum itaque eos velit reprehenderit consequuntur at.
            Quis vitae quibusdam explicabo, deserunt saepe molestiae suscipit. Possimus accusantium quae optio quas quaerat nulla tempore harum. Labore, beatae. Rem modi porro recusandae at alias necessitatibus dicta eaque suscipit distinctio!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row gap-y-[48px] items-center justify-center">
        <Image
          src="/assets/image2.jpeg"
          alt="Feature 2 image"
          width={496}
          height={408}
          className="hidden w-1/2 sm:block rounded-[28px] opacity-100"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px] flex flex-col">
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">
            Working with the opportunity card in germany
          </h1>
          <Image
            src="/assets/image3.jpeg"
            alt="feature 3 image"
            width={496}
            height={408}
            className="pt-[24px] sm:hidden rounded-[28px] opacity-100"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quasi quae eligendi, quis a vitae rerum, amet atque illo ut repellat dicta voluptatem officiis enim qui laudantium aliquam sequi ad? 
          </p>
          <p className="py-[24px] text-[#36485C] lg:text-[18px] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quasi quae eligendi, quis a vitae rerum, amet atque illo ut repellat dicta voluptatem officiis enim qui laudantium aliquam sequi ad? 
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse gap-y-[48px] items-center justify-center">
        <Image
          src="/assets/image4.jpeg"
          alt="Feature 4 image"
          width={496}
          height={408}
          className="hidden w-1/2 sm:block rounded-[28px] opacity-100"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px] flex flex-col">
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">
            Prequisites for the Opportunity card
          </h1>
          <Image
            src="/assets/image5.jpeg"
            alt="feature 5 image"
            width={496}
            height={408}
            className="pt-[24px] sm:hidden rounded-[28px] opacity-100"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat architecto, unde nemo asperiores laboriosam voluptates ducimus maiores vel dolor beatae repudiandae neque ut, corrupti magnam deleniti exercitationem, aut vitae!
            Minima possimus nostrum cum, corporis dolores nisi rerum suscipit laudantium recusandae facilis labore optio repellat accusamus facere omnis rem nemo laborum delectus hic quidem commodi! Provident alias distinctio ullam sapiente.
            Voluptate commodi possimus blanditiis ducimus magni vitae doloribus sint sunt, illum, temporibus enim, quia nisi non ipsam labore! Eum nesciunt laudantium dolorem fuga alias maxime dolore voluptatibus omnis exercitationem recusandae!
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
