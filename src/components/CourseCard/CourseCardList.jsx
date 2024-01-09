import React from 'react'
import CourseCard from './CourseCard'
import heroImg1 from "../../../public/hero/h1.jpg";
const courseList = [
    {
        title: "অটো ক্যাড ব্যাসিক",
        img: "https://images.pexels.com/photos/15764116/pexels-photo-15764116/free-photo-of-engineer-designs-a-home-for-a-client.jpeg",
        sdesc: "অটোক্যাড ব্যাসিক কোর্সটির মাধ্যমে একজন শিক্ষার্থী অটোক্যাড এর যাবতীয় কমান্ড সম্পর্কে দক্ষতা অর্থন করতে পারবে। সেই সাথে অটো ক্যাড ব্যবহার করে যে কোন প্রকার ড্রয়িং করার দক্ষতা অর্জন করতে পারবে।",
        fdesc: "প্রফেশনাল অটোক্যাড মাস্টারকোর্সটি অনলাইনে পৃথিবীর যে কোন জায়গা থেকে শিখতে পারবেন। অটোক্যাড ২ডি তে ৩০ টি ক্লাস ও ৩ডি তে প্রায় ১০ টি প্রি-রেকর্ডেড ক্লাস নিয়ে মোট ৪০ টি ক্লাস হবে। প্রত্যেকটি ক্লাস ২ থেকে ২.৫ ঘন্টা পর্যন্ত হবে। আমাদের ক্লাস হবে অত্যন্ত ইন্টারএকটিভ কেননা প্রায় প্রত্যেকটি সেশনে থাকছে কুইজ/অ্যাসেসমেন্ট এর ব্যবস্থা যার দ্বারা আপনি সহজেই নিজের অবস্থান যাচাই করতে পারবেন। ফুলটাইম সাপোট ইঞ্জিনিয়ার থাকবেন যারা প্রতিদিন আপনার বিভিন্ন সমস্যায় পাশে থাকবেন। এক কথায় আপনাকে সফল করতে যা যা দরকার সবই থাকবে এই মাস্টারকোর্সে।",
        module: ["৫ মাস", "১০০ টি লেসন", "১০ টি প্রোজেক্ট"],
        achievements: ["ফানডামেনটাল ডিজাইন নলেজ", "অটোকেড লেআউট ডিজাইনিং"]
    },

    {
        title: "প্রফেশনাল অটো-ক্যাড ফর সিভিল",
        img: "https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg",
        sdesc: "প্রফেশনাল অটো-ক্যাড ফর সিভিল কোর্সটির মাধ্যমে একজন শিক্ষার্থী সিভিল ইঞ্জিনিয়ারিং এর সকল প্রকার স্ট্রাকচারাল ড্রয়িং করার দক্ষতা অর্যন করতে পারবে। সেই সাথে  যে কোন প্রকার ফ্লোর প্লান করার দক্ষতা অর্যন করতে পারবে। উক্ত কোর্সের উপর ২টি বাস্তবিক প্রজেক্ট সম্পন্ন করানো হবে।",
        fdesc: "প্রফেশনাল অটোক্যাড মাস্টারকোর্সটি অনলাইনে পৃথিবীর যে কোন জায়গা থেকে শিখতে পারবেন। অটোক্যাড ২ডি তে ৩০ টি ক্লাস ও ৩ডি তে প্রায় ১০ টি প্রি-রেকর্ডেড ক্লাস নিয়ে মোট ৪০ টি ক্লাস হবে। প্রত্যেকটি ক্লাস ২ থেকে ২.৫ ঘন্টা পর্যন্ত হবে। আমাদের ক্লাস হবে অত্যন্ত ইন্টারএকটিভ কেননা প্রায় প্রত্যেকটি সেশনে থাকছে কুইজ/অ্যাসেসমেন্ট এর ব্যবস্থা যার দ্বারা আপনি সহজেই নিজের অবস্থান যাচাই করতে পারবেন। ফুলটাইম সাপোট ইঞ্জিনিয়ার থাকবেন যারা প্রতিদিন আপনার বিভিন্ন সমস্যায় পাশে থাকবেন। এক কথায় আপনাকে সফল করতে যা যা দরকার সবই থাকবে এই মাস্টারকোর্সে।",
        module: ["৫ মাস", "১০০ টি লেসন", "২ টি প্রোজেক্ট"],
        achievements: ["ফানডামেনটাল ডিজাইন নলেজ", "অটোকেড লেআউট ডিজাইনিং"]
    },
    {
        title: "অনুমোদন শিট ড্রয়িং",
        img: heroImg1,
        sdesc: "উক্ত কোর্সের মাধ্যমে একজন শিক্ষার্থী বাংলাদেশের যে কোন সংস্থার  (কোর্ড অনুযায়ী) নির্মাণ অনুমোদন সিট ড্রয়িং করার দক্ষতা অর্যন করতে পাবে।",
        fdesc: "প্রফেশনাল অটোক্যাড মাস্টারকোর্সটি অনলাইনে পৃথিবীর যে কোন জায়গা থেকে শিখতে পারবেন। অটোক্যাড ২ডি তে ৩০ টি ক্লাস ও ৩ডি তে প্রায় ১০ টি প্রি-রেকর্ডেড ক্লাস নিয়ে মোট ৪০ টি ক্লাস হবে। প্রত্যেকটি ক্লাস ২ থেকে ২.৫ ঘন্টা পর্যন্ত হবে। আমাদের ক্লাস হবে অত্যন্ত ইন্টারএকটিভ কেননা প্রায় প্রত্যেকটি সেশনে থাকছে কুইজ/অ্যাসেসমেন্ট এর ব্যবস্থা যার দ্বারা আপনি সহজেই নিজের অবস্থান যাচাই করতে পারবেন। ফুলটাইম সাপোট ইঞ্জিনিয়ার থাকবেন যারা প্রতিদিন আপনার বিভিন্ন সমস্যায় পাশে থাকবেন। এক কথায় আপনাকে সফল করতে যা যা দরকার সবই থাকবে এই মাস্টারকোর্সে।",
        module: ["৫ মাস", "১০০ টি লেসন", "২ টি প্রোজেক্ট"],
        achievements: ["ফানডামেনটাল ডিজাইন নলেজ", "অটোকেড লেআউট ডিজাইনিং"]
    },
    {
        title: "e-Tabs for Rcc Design",
        img: "https://www.csiamerica.com/site/product/etabs/product-features/Piers,Spandrels,Wall%20stack2.png",
        sdesc: "উক্ত কোর্সের মাধ্যমে একজন শিক্ষার্থী আরসিসি স্ট্রাকচার ডিজাইন ও এনালাইসিস করতে পারবে। উক্ত কোর্সের উপর ২টি বাস্তবিক প্রজেক্ট সম্পন্ন করানো হবে।",
        fdesc: "প্রফেশনাল অটোক্যাড মাস্টারকোর্সটি অনলাইনে পৃথিবীর যে কোন জায়গা থেকে শিখতে পারবেন। অটোক্যাড ২ডি তে ৩০ টি ক্লাস ও ৩ডি তে প্রায় ১০ টি প্রি-রেকর্ডেড ক্লাস নিয়ে মোট ৪০ টি ক্লাস হবে। প্রত্যেকটি ক্লাস ২ থেকে ২.৫ ঘন্টা পর্যন্ত হবে। আমাদের ক্লাস হবে অত্যন্ত ইন্টারএকটিভ কেননা প্রায় প্রত্যেকটি সেশনে থাকছে কুইজ/অ্যাসেসমেন্ট এর ব্যবস্থা যার দ্বারা আপনি সহজেই নিজের অবস্থান যাচাই করতে পারবেন। ফুলটাইম সাপোট ইঞ্জিনিয়ার থাকবেন যারা প্রতিদিন আপনার বিভিন্ন সমস্যায় পাশে থাকবেন। এক কথায় আপনাকে সফল করতে যা যা দরকার সবই থাকবে এই মাস্টারকোর্সে।",
        module: ["৫ মাস", "১০০ টি লেসন", "২ টি প্রোজেক্ট"],
        achievements: ["ফানডামেনটাল ডিজাইন নলেজ", "অটোকেড লেআউট ডিজাইনিং"]
    },
    {
        title: "3Ds Max With Randaring",
        img: "https://images.pexels.com/photos/15764110/pexels-photo-15764110/free-photo-of-a-man-is-looking-at-a-computer-screen-with-a-3d-model.jpeg",
        sdesc: "এই কোর্সটি সম্পন্ন করার মাধ্যমে একজন শিক্ষার্থী যে কোন প্রকার এক্সটেরিয়র ডিজাইন করতে ও  রেন্ডারিং এর কাজ করতে পাবে।উক্ত কোর্সের উপর ২টি বাস্তবিক প্রজেক্ট সম্পন্ন করানো হবে।",
        fdesc: "প্রফেশনাল অটোক্যাড মাস্টারকোর্সটি অনলাইনে পৃথিবীর যে কোন জায়গা থেকে শিখতে পারবেন। অটোক্যাড ২ডি তে ৩০ টি ক্লাস ও ৩ডি তে প্রায় ১০ টি প্রি-রেকর্ডেড ক্লাস নিয়ে মোট ৪০ টি ক্লাস হবে। প্রত্যেকটি ক্লাস ২ থেকে ২.৫ ঘন্টা পর্যন্ত হবে। আমাদের ক্লাস হবে অত্যন্ত ইন্টারএকটিভ কেননা প্রায় প্রত্যেকটি সেশনে থাকছে কুইজ/অ্যাসেসমেন্ট এর ব্যবস্থা যার দ্বারা আপনি সহজেই নিজের অবস্থান যাচাই করতে পারবেন। ফুলটাইম সাপোট ইঞ্জিনিয়ার থাকবেন যারা প্রতিদিন আপনার বিভিন্ন সমস্যায় পাশে থাকবেন। এক কথায় আপনাকে সফল করতে যা যা দরকার সবই থাকবে এই মাস্টারকোর্সে।",
        module: ["৫ মাস", "১০০ টি লেসন", "২ টি প্রোজেক্ট"],
        achievements: ["ফানডামেনটাল ডিজাইন নলেজ", "অটোকেড লেআউট ডিজাইনিং"]
    },
    {
        title: "প্রফেশনাল অটো-ক্যাড ফর ইলেকট্রিক্যাল",
        img: "https://images.pexels.com/photos/4263057/pexels-photo-4263057.jpeg",
        sdesc: "প্রফেশনাল অটো-ক্যাড ফর ইকেট্রিক্যাল কোর্সটির মাধ্যমে একজন শিক্ষার্থী ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং এর সকল প্রকার ড্রয়িং করার দক্ষতা অর্যন করতে পারবে। সেই সাথে  লোড ক্যালকোলেশন করার দক্ষতা অর্যন করতে পারবে। উক্ত কোর্সের উপর ২টি বাস্তবিক প্রজেক্ট সম্পন্ন করানো হবে।",
        fdesc: "প্রফেশনাল অটোক্যাড মাস্টারকোর্সটি অনলাইনে পৃথিবীর যে কোন জায়গা থেকে শিখতে পারবেন। অটোক্যাড ২ডি তে ৩০ টি ক্লাস ও ৩ডি তে প্রায় ১০ টি প্রি-রেকর্ডেড ক্লাস নিয়ে মোট ৪০ টি ক্লাস হবে। প্রত্যেকটি ক্লাস ২ থেকে ২.৫ ঘন্টা পর্যন্ত হবে। আমাদের ক্লাস হবে অত্যন্ত ইন্টারএকটিভ কেননা প্রায় প্রত্যেকটি সেশনে থাকছে কুইজ/অ্যাসেসমেন্ট এর ব্যবস্থা যার দ্বারা আপনি সহজেই নিজের অবস্থান যাচাই করতে পারবেন। ফুলটাইম সাপোট ইঞ্জিনিয়ার থাকবেন যারা প্রতিদিন আপনার বিভিন্ন সমস্যায় পাশে থাকবেন। এক কথায় আপনাকে সফল করতে যা যা দরকার সবই থাকবে এই মাস্টারকোর্সে।",
        module: ["৫ মাস", "১০০ টি লেসন", "২ টি প্রোজেক্ট"],
        achievements: ["ফানডামেনটাল ডিজাইন নলেজ", "অটোকেড লেআউট ডিজাইনিং"]
    },
]

function CourseCardList() {
  return (
    <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-10'>
        {
            courseList.map((course, index) => (
                <CourseCard
                    key={index} 
                    img={course.img}
                    title={course.title}
                    sdesc={course.sdesc}
                    fdesc={course.fdesc}
                    achievements={course.achievements}
                    module={course.module}
                />
            ))
        }
    </div>
  )
}

export default CourseCardList