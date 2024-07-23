import React from 'react'
import memesData from '../memesData'
export default function Meme(){

    const [meme,setMeme]=React.useState({
        topText:'',
        bottomText:'',
        randomImage:'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes,setAllMemes]=React.useState(memesData)
    function handleChange(event){
        const {name,value}=event.target;
        setMeme(prevState=>{
            return (
                {
                    ...prevState,
                    [name]:value
                }
            )
        })
    }
    function imageGenerator(event){
            event.preventDefault()
            const memesArray=allMemes.data.memes;
            const randIndex=Math.floor(Math.random()*memesArray.length)
            setMeme(prevMeme=>{return{
            ...prevMeme,
            randomImage:memesArray[randIndex].url
            }})
            console.log(imageUrl)
    }
  
    

    return (
        <form action="" className='mx-10 py-5 flex flex-col gap-3'>
            <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
                <label htmlFor="top-text" className='text-sm text-black font-medium'>Top text</label>
                <input id='top-text' name='topText' onChange={handleChange} type="text" placeholder='Shut up' className='border-2 px-2 py-1 w-64 rounded-md' />
            </div>
            <div className='flex flex-col'>
            <label htmlFor="bottom-text" className='text-sm text-black font-medium'>Bottom text</label>
            <input id='bottom-text' type="text" name='bottomText' onChange={handleChange}  placeholder='And take my money' className='border-2 px-2 py-1 w-64 rounded-md' />
            </div>
            </div>
            <button onClick={imageGenerator} className='bg-gradient-to-r from-[#672280] to-[#A626D3] w-full py-2 rounded-md text-white font-medium'>Get a new meme image 🖼</button>
            <div className='relative'>
              <img src={meme.randomImage} alt="" />
              <p className='absolute top-5 text-3xl font-bold text-white w-full text-center'>{meme.topText}</p>
              <p className='absolute bottom-5 text-3xl font-bold text-white w-full text-center'>{meme.bottomText}</p>
            </div>
        </form>
    )
}