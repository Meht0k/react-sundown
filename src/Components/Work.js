import React from 'react';
import './Css/Work.css';
import { Link } from 'react-router-dom';

function Work() {

  const Cards = [
    {
      id: 1,
      heading: "CES 2023",
      name: "MEDIALINK ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16bf_005A0075-HDR-p-800.webp"
    },
    {
      id: 2,
      heading: "Superrep",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16d9_Copy%2520of%2520Nike_Soho_SuperRep_01-16-21_0465bv2-p-800.webp"
    },
    {
      id: 3,
      heading: "AirForce 12022",
      name: "NIKE",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16a5_Nike_Soho_HO22_FL1_2583-p-800.webp"
    },
    {
      id: 4,
      heading: "Super Bowl 56 LA",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16e8_Copy%2520of%2520Copy%2520of%2520LasVegas_SB56_5405-p-800.webp"
    },
    {
      id: 5,
      heading: "SOHO 2023",
      name: "CONVERSE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp"
    },
    {
      id: 6,
      heading: "Air Force 12021",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp"
    },
    {
      id: 7,
      heading: "Makers Studio HOI",
      name: "NIKE EXPERIENTIAL",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp"
    },
    {
      id: 8,
      heading: "NFL Draft Las Vegas",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1700_Copy%2520of%2520220429_NIKE4558_Nike_Las_Vegas_NFL_Draft_Beauty_Edited_Select_11-p-800.webp"
    },
    {
      id: 9,
      heading: "CES IBM Experience",
      name: "MEDIALINK EXPERIENTIAL",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1729_005A0854-p-800.webp"
    },
    {
      id: 10,
      heading: "Chicago Marathon",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b165c_210925_ChicagoMarathon_NikeChicago_BeautyShots_MP-17-p-800.webp"
    },
    {
      id: 11,
      heading: "Never Done",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16dc_Copy%2520of%2520Nike_Soho_Never_Done_SP22_7673v2-p-800.webp"
    },
    {
      id: 12,
      heading: "Chicago Marathon 2022",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b167b_221004_NIKE4846_ChicagoMarathon_Retail_Beauty__B7I9885-p-800.webp"
    },
    {
      id: 13,
      heading: "CES 2023",
      name: "MEDIALINK EXPERIENTIAL",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1721_005A0462-p-800.webp"
    },
    {
      id: 14,
      heading: "Play New Kidvision",
      name: "NIKE EXPERIENTIAL",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1657_Copy%2520of%2520Nike_Soho_FA20_0583_CROPPED%2520copy-p-800.webp"
    },
    {
      id: 15,
      heading: "Lebron XX",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16b5_221105_NIKE5059_The%2520Grove%2520LBJ_AF1_Edited%2520Selects_SN_12-p-800.webp"
    },
    {
      id: 16,
      heading: "HBCU",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1666_Copy%2520of%2520Nike_Soho_HBCU_0573-p-800.webp"
    },
    {
      id: 17,
      heading: "50th Anniversary",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp"
    },
    {
      id: 18,
      heading: "SOHO NYC",
      name: "ARC’TERYX ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180-p-800.webp"
    },
    {
      id: 19,
      heading: "Olympics Play New",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b166c_Nike_Soho_FA21_Olympics_7707-p-800.webp"
    },
    {
      id: 20,
      heading: "MediaLink CES",
      name: "MEDIALINK DIGITAL",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1686_SU22_MLB_TheGrove_2416-p-800.webp"
    },
    {
      id: 21,
      heading: "Hunter x Nordstrom",
      name: "HUNTER EXPERIENTIAL",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16e8_Copy%2520of%2520Copy%2520of%2520LasVegas_SB56_5405-p-800.webp"
    },
    {
      id: 22,
      heading: "Run with Nike",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b168b_Copy%2520of%2520FA22RWN_Chicago_5529-p-800.webp"
    },
    {
      id: 23,
      heading: "Vapormax",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1657_Copy%2520of%2520Nike_Soho_FA20_0583_CROPPED%2520copy-p-800.webp"
    },
    {
      id: 24,
      heading: "Play New Kidvision",
      name: "NIKE ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b166c_Nike_Soho_FA21_Olympics_7707-p-800.webp"
    },
    {
      id: 25,
      heading: "Adidas x Kith",
      name: "ADIDAS ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1607_Copy%2520of%252020220301_starch_kith_1011824-Edit-p-800.webp"
    },
    {
      id: 26,
      heading: "Made for Play",
      name: "PATERSON DIGITAL",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1755_ALT%2520Paterson%2520Header-p-800.jpeg"
    },
    {
      id: 27,
      heading: "CES 2023",
      name: "MEDIALINK ENVIRONMENT",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16bf_005A0075-HDR-p-800.webp"
    },
    {
      id: 28,
      heading: "NYFW Popup",
      name: "AFTERPAY EXPERIENTIAL",
      imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1700_Copy%2520of%2520220429_NIKE4558_Nike_Las_Vegas_NFL_Draft_Beauty_Edited_Select_11-p-800.webp"
    },
  ];



























  return (
    <>
      <div className="main">
        <h5>WORK</h5>
        <div className='work-header'>
          <div className='stick-nav'>
            <ul className='stick-list'>
              <li><Link to="/">All</Link></li>
              <li><Link to="/">Expriential</Link></li>
              <li><Link to="/">Environment</Link></li>
              <li><Link to="/">Digital</Link></li>
            </ul>
          </div>
        </div>
        <div className="work-glow"></div>
        <div className='work-card'>
          {Cards.map((card, index) => {
            return (
              <div className='card1' key={index}>
                <div className='card-img'>
                  <img src={card.imgUrl} alt='' />
                </div>
                <div className='card-body1'>
                  <h4>{card.heading}</h4>
                  <h6>{card.name}</h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Work;


