// main.js
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const axios = require('axios');
const cheerio = require('cheerio');
const url = "https://ncov.moh.gov.vn/";


fetchData(url).then( (res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const cases = $(".font24").eq(0).text();
    const treatment = $(".font24").eq(1).text();
    const recovered = $(".font24").eq(2).text();
    const deaths = $(".font24").eq(3).text();

    // So ca nhiem, dang dieu tri, tu vong, hoi phuc
    const vietnam = { cases, treatment, deaths, recovered };

    console.log(vietnam);

    const trs = $("#sailorTable > tbody > tr");
    
    trs.each(function() {
        let tinhThanh = $(this).find('td').eq(0).text();
        let tongSoCa = $(this).find('td').eq(1).text();
        let homNay = $(this).find('td').eq(2).text();
        let tuVong = $(this).find('td').eq(3).text();
        
        const tinhThanhElement = {tinhThanh, tongSoCa, homNay, tuVong};
        console.log(tinhThanhElement)

    });


})

async function fetchData(url){
    console.log("Crawling data...")
    let response = null;

    try {

        response = await axios.get(url);

        if(response.status !== 200){
            console.log("Error occurred while fetching data");
            return;
        }

      } catch (error) {
        console.error(error);
      }

    return response;
}