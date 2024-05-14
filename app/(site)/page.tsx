import CustomButton from "@/components/custom-button";
import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import appBanner from "../../public/appBanner.png";
import Cal from "../../public/cal.png";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS } from "@/lib/constants";
import { Avatar,AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { twMerge } from "tailwind-merge";
import { USERS } from "@/lib/constants";
import clsx from "clsx";
import { randomUUID } from 'crypto';
import Diamond from "@/public/icons/diamond.svg";
import CheckIcon from "@/public/icons/Check.svg";
import CustomCard from "@/components/landing-page/custom-card";


function Home() {


  return (
    <>
      <section>
        <div
          className="
         overflow-hidden
         px-4
         sm:px-6
         mt-10
         sm:flex
         sm:flex-col
         gap-4
         md:justify-center
         md:items-center
        "
        >
          <TitleSection
            pill=" ✨ Handle your workspace safely"
            title="Collaborate with your team seamlessly and Flawless experience"
          />
        </div>
        <CustomButton showIcon={false} >
          Get Surpass
        </CustomButton >
        <div className="relative p-4 sm:p-6 w-full flex justify-center items-center">
          <Image src={appBanner} alt="banner" height={90} width={1000} />
          <div
            className=" absolute 
          top-[50%]
          left-0
          right-0
          bottom-0
          bg-gradient-to-t
          dark:from-[#000000]
          z-[10]

          "
          ></div>
        </div>
      </section>
      <section className="relative">
        <div
        className="
        overflow-hidden
        relative
        mx-4
        flex
        after:content-['']
        after:absolute
        after:right-0
        after:top-0
        after:buttom-0
        after:bg-gradient-to-l
        after:from-background
      after:dark:from-black
        after:to-transparent
        after:w-20
        after:h-full
        after:z-[10]

        before:content-['']
        before:absolute
        before:left-0
        before:top-0
        before:buttom-0
        before:dark:from-black
        before:to-transparent
        before:from-background
        before:bg-gradient-to-r
        before:w-20
        before:h-full
        before:z-[10]
        "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
                flex-nowrap
                animate-slide
          "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    w-[200px]
                    m-5
                    shrink-0
                    flex
                    items-center
                    h-[100px]
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    
                    className="object-contain h-[40px] max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}

        </div>
      </section>
      <section
      className="
      px-4
      sm:px-6
      flex
      justify-center
      items-center
      flex-col
      relative
      "
      >
        <div
        className="
        w-[30%]
        blur-[120px]
        rounded-full
        h-32
        absolute
        bg-[#93919A]
        -z-10
        top-22
        "
        />
        <TitleSection 
        title="Keep track of all your meetings
        in one place"
        subheading="capture your ideas, thoughts, and meeting 
        notes in a structured and organized "
        pill="features" />
        <div
        className="
        mt-10
        flex
        max-w-[450px]
        
        justify-center
        items-center
        relative
        sm:ml-0
        rounded-2xl
        border-8
      border-[#3C3737]
      border-opacity-10
        "
        >
          <Image src={Cal} 
          alt="banner"
          height={300}
          className="rounded-2xl object-cover"
          />
        </div>
      </section>
      <section className="relative">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-[#93919A]
          -z-100
          top-56
        "
        />
        <div
          className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
        >
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx('mt-10 flex flex-nowrap gap-6 self-start', {
                  'flex-row-reverse': index === 1,
                  'animate-[slide_250s_linear_infinite]': true,
                  'animate-[slide_250s_linear_infinite_reverse]': index === 1,
                  'ml-[100vw]': index === 1,
                }),
                'hover:paused'
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px]
                  shrink-0s
                  rounded-xl
                  dark:bg-gradient-to-b
                  dark:from-[#393030] dark:to-13111D
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                  "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-Neutrals/neutrals-8">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-Neutrals/neutrals-8">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
          </div>
        </section>
        <section
        className="mt-20
        px-4
        sm:px-6
      "
      >
        <TitleSection
          title="The Perfect Plan For You"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pill="Pricing"
        />
        <div
          className="flex 
        flex-col-reverse
        sm:flex-row
        gap-4
        justify-center
        sm:items-stretch
        items-center
        mt-10
        "
        >
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                'w-[300px] rounded-2xl dark:bg-[#030014] background-blur-3xl relative',
                {
                  'border-Neutrals/neutrals-9':
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle
                  className="text-2xl
                  font-semibold
              "
                >
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div
                        className="hidden dark:block w-full blur-[120px] rounded-full h-32
                        absolute
                        bg-Neutrals/neutrals-5
                        -z-10
                        top-0
                      "
                      />
                      <Image
                        src={Diamond}
                        alt="Pro Plan Icon"
                        className="absolute top-6 right-6"
                      />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span
                    className="font-normal 
                    text-2xl
                "
                  >
                    ${card.price}
                  </span>
                  {+card.price > 0 ? (
                    <span className="dark:text-washed-purple-800 ml-1">
                      /mo
                    </span>
                  ) : (
                    ''
                  )}
                  <p className="dark:text-Neutrals/neutrals-8">
                    {card.description}
                  </p>
                  <Button
                    variant={"secondary"}
                    className="whitespace-nowrap w-full mt-4"
                  >
                    {card.planType === PRICING_PLANS.proplan
                      ? 'Go Pro'
                      : 'Get Started'}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul
                  className="font-normal
                  flex
                  mb-2
                  flex-col
                  gap-2
                "
                >
                  <small>{card.highlightFeature}</small>
                  {card.freatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex
                      items-center
                      gap-2
                    "
                    >
                      <Image
                        src={ CheckIcon}
                        alt="Check Icon"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
