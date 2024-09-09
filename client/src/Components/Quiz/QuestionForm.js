import React from 'react';

const QuestionForm = () => {

    return (
        <section className='max-w-[1440px] mx-auto my-10'>
            <div className='mx-5 md:mx-10'>
                <h1 className='text-2xl text-white font-semibold mb-8'>Create Question</h1>
                <div>
                    <label htmlFor="" className='block text-base text-[#01B6FF] uppercase font-semibold mb-2'>Category</label>
                    <input type="text" className='w-full border border-white rounded-sm bg-[#1E2736] text-white text-lg p-3' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='block text-base text-[#01B6FF] uppercase font-semibold mb-2'>Sub-Category</label>
                    <input type="text" className='w-full border border-white rounded-sm bg-[#1E2736] text-white text-lg p-3' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='block text-base text-[#01B6FF] uppercase font-semibold mb-2'>Questions</label>
                    <input type="text" className='w-full border border-white rounded-sm bg-[#1E2736] text-white text-lg p-3' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='block text-base text-[#01B6FF] uppercase font-semibold mb-2'>Answer Options</label>
                    <fieldset className='w-full border border-white rounded-sm bg-[#1E2736] text-white text-lg p-5'>
                        <legend className='text-[#01B6FF] text-sm font-semibold px-2'>Option 1</legend>
                    </fieldset>
                    <fieldset className='w-full border border-white rounded-sm bg-[#1E2736] text-white text-lg p-5 mt-5'>
                        <legend className='text-[#01B6FF] text-sm font-semibold px-2'>Option 2</legend>
                    </fieldset>
                    <fieldset className='w-full border border-white rounded-sm bg-[#1E2736] text-white text-lg p-5 mt-5'>
                        <legend className='text-[#01B6FF] text-sm font-semibold px-2'>Option 3</legend>
                    </fieldset>
                    <fieldset className='w-full border border-white rounded-sm bg-[#1E2736] text-white text-lg p-5 mt-5'>
                        <legend className='text-[#01B6FF] text-sm font-semibold px-2'>Option 4</legend>
                    </fieldset>
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='block text-base text-[#01B6FF] uppercase font-semibold mb-2'>Code Samples</label>
                    <div className='w-fit shadow-lg rounded-sm bg-[#232e41] text-white text-lg p-5 pl-10'>
                        <p>{`1`}<span className='text-purple-600'>{` const`}</span> {`arr = [1, "Jayesh", {name: "JC" }];`}</p>
                        <p>{`2`}<span className='text-purple-600'> for</span>{`(let value of arr) {`}</p>
                        <p>{`3 console.`}<span className='text-green-600'>log</span> {`(value + 1);`}</p>
                        <p>{`4 }`}</p>
                        <br />
                        {/* <p>{`A) 2 NaN [object Object]1`}</p>
                        <p>{`B) 2 NaN NaN`}</p>
                        <p>{`C) 2 Jayesh1 [object Object]1`}</p>
                        <p>{`D) 2 Jayesh1 NaN`}</p> */}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default QuestionForm;