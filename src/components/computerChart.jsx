import React from 'react'
import laptopwave from "../assets/laptopwave.png"
import reactLogo from "../assets/reactLogo.svg";
import vscodeLogo from "../assets/vscodeLogo.svg";
import javascriptLogo from "../assets/javascriptLogo.svg";
import htmlLogo from "../assets/htmlLogo.svg";
import githubLogo from "../assets/githubLogo.svg";
import figmaLogo from "../assets/figmaLogo.svg";
import cssLogo from "../assets/cssLogo.svg";
import bootstrapLogo from "../assets/bootstrapLogo.svg"

export const ComputerChart=()=> {
  return (
<div className='animation-example'>
    <div className='item'>
        <div className='line'></div>
        <div className='dot'></div>
        <div className='circle'>
            <img src={reactLogo} alt="" />
        </div>
    </div>
    <div className='item'>
        <div className='line'></div>
        <div className='dot'></div>
        <div className='circle'>
        <img style={{transform: 'rotate(-90deg)'}} src={vscodeLogo} alt="" />
        </div>
    </div>
    <div className='item'>
        <div className='line'></div>
        <div className='dot'></div>
        <div className='circle'>
        <img style={{transform: 'rotate(-180deg)'}} src={javascriptLogo} alt="" />
        </div>
    </div>
    <div className='item'>
        <div className='line'></div>
        <div className='dot'></div>
        <div className='circle'>
        <img style={{transform: 'rotate(90deg)'}}  src={htmlLogo} alt="" />
        </div>
    </div>
    <div className='item -type2'>
        <div className='line'></div>
        <div className='dot'></div>
        <div className='circle'>
        <img src={githubLogo} alt="" />
        </div>
    </div>
    <div className='item -type2'>
        <div className='line'></div>
        <div className='dot'></div>
        <div className='circle'>
        <img style={{transform: 'rotate(-180deg)'}}  src={figmaLogo} alt="" />
        </div>
    </div>
    <div className='item -type2'>
        <div className='line'></div>
        <div className='dot'></div>
        <div className='circle'>
        <img style={{transform: 'rotate(-180deg)'}}  src={cssLogo} alt=""/>
        </div>
    </div>
    <div className='item -type2'>
        <div className='line'></div>
        <div className='dot'></div>
        <div className='circle'>
        <img src={bootstrapLogo} alt="" />
        </div>
    </div>
    <div className='center'>
        <div className='circle'>
            <img src={laptopwave} height={120} alt="" />
        </div>
    </div>
</div>
  )
}
