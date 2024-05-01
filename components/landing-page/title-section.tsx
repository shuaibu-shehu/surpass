import React from 'react';
import { Button } from '../ui/button';

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pill,
}) => {
  return (
    <React.Fragment>
      <section
        className="flex
        flex-col
        gap-4
        justify-center
        items-start
        md:items-center
      "
      >
        <article
           className=' 
           p-[2px]
           m-6
           mx-4
           sm:mx-auto
           rounded-xl
           bg-gradient-to-r
           from-[#665353]
           to-[#000000]
           w-[fit-content]
           flex
           justify-center
           items-center
           '
        >
  
        <p 
        className='
        rounded-xl
        p-2
        bg-gradient-to-r
        from-[#000000]
        to-[#656565]
       
        '>
          {pill}
        </p>

        </article>
        {subheading ? (
          <>
            <h2
              className="text-left
              text-2xl
              sm:text-5xl
              sm:max-w-[750px]
              md:text-center
              font-semibold
            "
            >
              {title}
            </h2>
            <p
              className="dark:text-Neutrals/neutrals-7 sm:max-w-[450px]
              md:text-center
            "
            >
              {subheading}
            </p>
          </>
        ) : (
          <h1
            className=" text-left 
            text-4xl
            sm:text-6xl
            sm:max-w-[850px]
            md:text-center
            font-semibold
          "
          >
            {title}
          </h1>
        )}
      </section>
    </React.Fragment>
  );
};

export default TitleSection;