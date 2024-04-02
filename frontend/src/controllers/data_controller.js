const apiKey = '8OS2mP4_wX4djoMj3VzXcVo4TXSb-2Asc9HhxOxq6DY';
const apiUrl = 'https://trefle.io/api/v1/plants';

export async function fetchPlants(query, filters) {
  return await fetch(`${apiUrl}/search?token=${apiKey}&q=${query}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Plants fetched")
      return data.data; // Return the fetched data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

export async function getPlantDetails(plantId) {
  return await fetch(`${apiUrl}/${plantId}?token=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Plant Details Fetched")
      return data.data; // Return the fetched data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      return null;
    });
}

export const getZoneFilters = () => {
  return [
    {
      "label": "Europe",
      "value": "1"
    },
    {
      "label": "Africa",
      "value": "2"
    },
    {
      "label": "Asia-Temperate",
      "value": "3"
    },
    {
      "label": "Asia-Tropical",
      "value": "4"
    },
    {
      "label": "Australasia",
      "value": "5"
    },
    {
      "label": "Pacific",
      "value": "6"
    },
    {
      "label": "Northern America",
      "value": "7"
    },
    {
      "label": "Southern America",
      "value": "8"
    },
    {
      "label": "Antarctic",
      "value": "9"
    },
    {
      "label": "Northern Europe",
      "value": "10"
    },
    {
      "label": "Middle Europe",
      "value": "11"
    },
    {
      "label": "Southwestern Europe",
      "value": "12"
    },
    {
      "label": "Southeastern Europe",
      "value": "13"
    },
    {
      "label": "Eastern Europe",
      "value": "14"
    },
    {
      "label": "Northern Africa",
      "value": "20"
    },
    {
      "label": "Macaronesia",
      "value": "21"
    },
    {
      "label": "West Tropical Africa",
      "value": "22"
    },
    {
      "label": "West-Central Tropical Africa",
      "value": "23"
    },
    {
      "label": "Northeast Tropical Africa",
      "value": "24"
    },
    {
      "label": "East Tropical Africa",
      "value": "25"
    },
    {
      "label": "South Tropical Africa",
      "value": "26"
    },
    {
      "label": "Southern Africa",
      "value": "27"
    },
    {
      "label": "Middle Atlantic Ocean",
      "value": "28"
    },
    {
      "label": "Western Indian Ocean",
      "value": "29"
    },
    {
      "label": "Siberia",
      "value": "30"
    },
    {
      "label": "Russian Far East",
      "value": "31"
    },
    {
      "label": "Middle Asia",
      "value": "32"
    },
    {
      "label": "Caucasus",
      "value": "33"
    },
    {
      "label": "Western Asia",
      "value": "34"
    },
    {
      "label": "Arabian Peninsula",
      "value": "35"
    },
    {
      "label": "China",
      "value": "36"
    },
    {
      "label": "Mongolia",
      "value": "37"
    },
    {
      "label": "Eastern Asia",
      "value": "38"
    },
    {
      "label": "Indian Subcontinent",
      "value": "40"
    },
    {
      "label": "Indo-China",
      "value": "41"
    },
    {
      "label": "Malesia",
      "value": "42"
    },
    {
      "label": "Papuasia",
      "value": "43"
    },
    {
      "label": "Australia",
      "value": "50"
    },
    {
      "label": "New Zealand",
      "value": "51"
    },
    {
      "label": "Southwestern Pacific",
      "value": "60"
    },
    {
      "label": "South-Central Pacific",
      "value": "61"
    },
    {
      "label": "Northwestern Pacific",
      "value": "62"
    },
    {
      "label": "North-Central Pacific",
      "value": "63"
    },
    {
      "label": "Subarctic America",
      "value": "70"
    },
    {
      "label": "Western Canada",
      "value": "71"
    },
    {
      "label": "Eastern Canada",
      "value": "72"
    },
    {
      "label": "Northwestern U.S.A.",
      "value": "73"
    },
    {
      "label": "North-Central U.S.A.",
      "value": "74"
    },
    {
      "label": "Northeastern U.S.A.",
      "value": "75"
    },
    {
      "label": "Southwestern U.S.A.",
      "value": "76"
    },
    {
      "label": "South-Central U.S.A.",
      "value": "77"
    },
    {
      "label": "Southeastern U.S.A.",
      "value": "78"
    },
    {
      "label": "Mexico",
      "value": "79"
    },
    {
      "label": "Central America",
      "value": "80"
    },
    {
      "label": "Caribbean",
      "value": "81"
    },
    {
      "label": "Northern South America",
      "value": "82"
    },
    {
      "label": "Western South America",
      "value": "83"
    },
    {
      "label": "Brazil",
      "value": "84"
    },
    {
      "label": "Southern South America",
      "value": "85"
    },
    {
      "label": "Subantarctic Islands",
      "value": "90"
    },
    {
      "label": "Antarctic Continent",
      "value": "91"
    },
    {
      "label": "Alberta",
      "value": "ABT"
    },
    {
      "label": "Afghanistan",
      "value": "AFG"
    },
    {
      "label": "Argentina Northeast",
      "value": "AGE"
    },
    {
      "label": "Buenos Aires",
      "value": "AGE-BA"
    },
    {
      "label": "Cordoba",
      "value": "AGE-CD"
    },
    {
      "label": "Chaco",
      "value": "AGE-CH"
    },
    {
      "label": "Corrientes",
      "value": "AGE-CN"
    },
    {
      "label": "Argentina Distrito Federal",
      "value": "AGE-DF"
    },
    {
      "label": "Entre Rios",
      "value": "AGE-ER"
    },
    {
      "label": "Formosa",
      "value": "AGE-FO"
    },
    {
      "label": "La Pampa",
      "value": "AGE-LP"
    },
    {
      "label": "Misiones",
      "value": "AGE-MI"
    },
    {
      "label": "Santa Fe",
      "value": "AGE-SF"
    },
    {
      "label": "Argentina South",
      "value": "AGS"
    },
    {
      "label": "Chubut",
      "value": "AGS-CB"
    },
    {
      "label": "Neuquen",
      "value": "AGS-NE"
    },
    {
      "label": "Rio Negro",
      "value": "AGS-RN"
    },
    {
      "label": "Santa Cruz",
      "value": "AGS-SC"
    },
    {
      "label": "Tierra del Fuego (Argentina)",
      "value": "AGS-TF"
    },
    {
      "label": "Argentina Northwest",
      "value": "AGW"
    },
    {
      "label": "Catamarca",
      "value": "AGW-CA"
    },
    {
      "label": "Jujuy",
      "value": "AGW-JU"
    },
    {
      "label": "La Rioja",
      "value": "AGW-LR"
    },
    {
      "label": "Mendoza",
      "value": "AGW-ME"
    },
    {
      "label": "Salta",
      "value": "AGW-SA"
    },
    {
      "label": "Santiago del Estero",
      "value": "AGW-SE"
    },
    {
      "label": "San Juan",
      "value": "AGW-SJ"
    },
    {
      "label": "San Luis",
      "value": "AGW-SL"
    },
    {
      "label": "Tucuman",
      "value": "AGW-TU"
    },
    {
      "label": "Alabama",
      "value": "ALA"
    },
    {
      "label": "Albania",
      "value": "ALB"
    },
    {
      "label": "Aldabra",
      "value": "ALD"
    },
    {
      "label": "Algeria",
      "value": "ALG"
    },
    {
      "label": "Altay",
      "value": "ALT"
    },
    {
      "label": "Aleutian Is.",
      "value": "ALU"
    },
    {
      "label": "Amur",
      "value": "AMU"
    },
    {
      "label": "Andaman Is.",
      "value": "AND"
    },
    {
      "label": "Andaman Is.",
      "value": "AND-AN"
    },
    {
      "label": "Coco Is.",
      "value": "AND-CO"
    },
    {
      "label": "Angola",
      "value": "ANG"
    },
    {
      "label": "Antarctica",
      "value": "ANT"
    },
    {
      "label": "Arizona",
      "value": "ARI"
    },
    {
      "label": "Arkansas",
      "value": "ARK"
    },
    {
      "label": "Aruba",
      "value": "ARU"
    },
    {
      "label": "Ascension",
      "value": "ASC"
    },
    {
      "label": "Alaska",
      "value": "ASK"
    },
    {
      "label": "Amsterdam-St.Paul Is.",
      "value": "ASP"
    },
    {
      "label": "Assam",
      "value": "ASS"
    },
    {
      "label": "Assam",
      "value": "ASS-AS"
    },
    {
      "label": "Manipur",
      "value": "ASS-MA"
    },
    {
      "label": "Meghalaya",
      "value": "ASS-ME"
    },
    {
      "label": "Mizoram",
      "value": "ASS-MI"
    },
    {
      "label": "Nagaland",
      "value": "ASS-NA"
    },
    {
      "label": "Tripura",
      "value": "ASS-TR"
    },
    {
      "label": "Antipodean Is.",
      "value": "ATP"
    },
    {
      "label": "Austria",
      "value": "AUT"
    },
    {
      "label": "Austria",
      "value": "AUT-AU"
    },
    {
      "label": "Liechtenstein",
      "value": "AUT-LI"
    },
    {
      "label": "Azores",
      "value": "AZO"
    },
    {
      "label": "Bahamas",
      "value": "BAH"
    },
    {
      "label": "Baleares",
      "value": "BAL"
    },
    {
      "label": "Bangladesh",
      "value": "BAN"
    },
    {
      "label": "Benin",
      "value": "BEN"
    },
    {
      "label": "Bermuda",
      "value": "BER"
    },
    {
      "label": "Belgium",
      "value": "BGM"
    },
    {
      "label": "Belgium",
      "value": "BGM-BE"
    },
    {
      "label": "Luxembourg",
      "value": "BGM-LU"
    },
    {
      "label": "Bismarck Archipelago",
      "value": "BIS"
    },
    {
      "label": "Burkina",
      "value": "BKN"
    },
    {
      "label": "Belarus",
      "value": "BLR"
    },
    {
      "label": "Baltic States",
      "value": "BLT"
    },
    {
      "label": "Estonia",
      "value": "BLT-ES"
    },
    {
      "label": "Kaliningrad",
      "value": "BLT-KA"
    },
    {
      "label": "Latvia",
      "value": "BLT-LA"
    },
    {
      "label": "Lithuania",
      "value": "BLT-LI"
    },
    {
      "label": "Belize",
      "value": "BLZ"
    },
    {
      "label": "Bolivia",
      "value": "BOL"
    },
    {
      "label": "Borneo",
      "value": "BOR"
    },
    {
      "label": "Brunei",
      "value": "BOR-BR"
    },
    {
      "label": "Kalimantan",
      "value": "BOR-KA"
    },
    {
      "label": "Sabah",
      "value": "BOR-SB"
    },
    {
      "label": "Sarawak",
      "value": "BOR-SR"
    },
    {
      "label": "Botswana",
      "value": "BOT"
    },
    {
      "label": "Bouvet I.",
      "value": "BOU"
    },
    {
      "label": "British Columbia",
      "value": "BRC"
    },
    {
      "label": "Buryatiya",
      "value": "BRY"
    },
    {
      "label": "Bulgaria",
      "value": "BUL"
    },
    {
      "label": "Burundi",
      "value": "BUR"
    },
    {
      "label": "Brazil West-Central",
      "value": "BZC"
    },
    {
      "label": "Brasilia Distrito Federal",
      "value": "BZC-DF"
    },
    {
      "label": "Goias",
      "value": "BZC-GO"
    },
    {
      "label": "Mato Grosso do Sul",
      "value": "BZC-MS"
    },
    {
      "label": "Mato Grosso",
      "value": "BZC-MT"
    },
    {
      "label": "Brazil Northeast",
      "value": "BZE"
    },
    {
      "label": "Alagoas",
      "value": "BZE-AL"
    },
    {
      "label": "Bahia",
      "value": "BZE-BA"
    },
    {
      "label": "Ceara",
      "value": "BZE-CE"
    },
    {
      "label": "Fernando de Noronha",
      "value": "BZE-FN"
    },
    {
      "label": "Maranhao",
      "value": "BZE-MA"
    },
    {
      "label": "Paraiba",
      "value": "BZE-PB"
    },
    {
      "label": "Pernambuco",
      "value": "BZE-PE"
    },
    {
      "label": "Piaui",
      "value": "BZE-PI"
    },
    {
      "label": "Rio Grande do Norte",
      "value": "BZE-RN"
    },
    {
      "label": "Sergipe",
      "value": "BZE-SE"
    },
    {
      "label": "Brazil Southeast",
      "value": "BZL"
    },
    {
      "label": "Espirito Santo",
      "value": "BZL-ES"
    },
    {
      "label": "Minas Gerais",
      "value": "BZL-MG"
    },
    {
      "label": "Rio de Janeiro",
      "value": "BZL-RJ"
    },
    {
      "label": "Sao Paulo",
      "value": "BZL-SP"
    },
    {
      "label": "Trindade",
      "value": "BZL-TR"
    },
    {
      "label": "Brazil North",
      "value": "BZN"
    },
    {
      "label": "Acre",
      "value": "BZN-AC"
    },
    {
      "label": "Amazonas",
      "value": "BZN-AM"
    },
    {
      "label": "Amapa",
      "value": "BZN-AP"
    },
    {
      "label": "Para",
      "value": "BZN-PA"
    },
    {
      "label": "Roraima",
      "value": "BZN-RM"
    },
    {
      "label": "Rondonia",
      "value": "BZN-RO"
    },
    {
      "label": "Tocantins",
      "value": "BZN-TO"
    },
    {
      "label": "Brazil South",
      "value": "BZS"
    },
    {
      "label": "Parana",
      "value": "BZS-PR"
    },
    {
      "label": "Rio Grande do Sul",
      "value": "BZS-RS"
    },
    {
      "label": "Santa Catarina",
      "value": "BZS-SC"
    },
    {
      "label": "Cabinda",
      "value": "CAB"
    },
    {
      "label": "Central African Republic",
      "value": "CAF"
    },
    {
      "label": "California",
      "value": "CAL"
    },
    {
      "label": "Cayman Is.",
      "value": "CAY"
    },
    {
      "label": "Cambodia",
      "value": "CBD"
    },
    {
      "label": "Chagos Archipelago",
      "value": "CGS"
    },
    {
      "label": "Chad",
      "value": "CHA"
    },
    {
      "label": "China South-Central",
      "value": "CHC"
    },
    {
      "label": "Chongqing",
      "value": "CHC-CQ"
    },
    {
      "label": "Guizhou",
      "value": "CHC-GZ"
    },
    {
      "label": "Hubei",
      "value": "CHC-HU"
    },
    {
      "label": "Sichuan",
      "value": "CHC-SC"
    },
    {
      "label": "Yunnan",
      "value": "CHC-YN"
    },
    {
      "label": "Hainan",
      "value": "CHH"
    },
    {
      "label": "Inner Mongolia",
      "value": "CHI"
    },
    {
      "label": "Nei Mongol",
      "value": "CHI-NM"
    },
    {
      "label": "Ningxia",
      "value": "CHI-NX"
    },
    {
      "label": "Manchuria",
      "value": "CHM"
    },
    {
      "label": "Heilongjiang",
      "value": "CHM-HJ"
    },
    {
      "label": "Jilin",
      "value": "CHM-JL"
    },
    {
      "label": "Liaoning",
      "value": "CHM-LN"
    },
    {
      "label": "China North-Central",
      "value": "CHN"
    },
    {
      "label": "Beijing",
      "value": "CHN-BJ"
    },
    {
      "label": "Gansu",
      "value": "CHN-GS"
    },
    {
      "label": "Hebei",
      "value": "CHN-HB"
    },
    {
      "label": "Shaanxi",
      "value": "CHN-SA"
    },
    {
      "label": "Shandong",
      "value": "CHN-SD"
    },
    {
      "label": "Shanxi",
      "value": "CHN-SX"
    },
    {
      "label": "Tianjin",
      "value": "CHN-TJ"
    },
    {
      "label": "Qinghai",
      "value": "CHQ"
    },
    {
      "label": "China Southeast",
      "value": "CHS"
    },
    {
      "label": "Anhui",
      "value": "CHS-AH"
    },
    {
      "label": "Fujian",
      "value": "CHS-FJ"
    },
    {
      "label": "Guangdong",
      "value": "CHS-GD"
    },
    {
      "label": "Guangxi",
      "value": "CHS-GX"
    },
    {
      "label": "Henan",
      "value": "CHS-HE"
    },
    {
      "label": "Hong Kong",
      "value": "CHS-HK"
    },
    {
      "label": "Hunan",
      "value": "CHS-HN"
    },
    {
      "label": "Jiangsu",
      "value": "CHS-JS"
    },
    {
      "label": "Jiangxi",
      "value": "CHS-JX"
    },
    {
      "label": "Kin-Men",
      "value": "CHS-KI"
    },
    {
      "label": "Macau",
      "value": "CHS-MA"
    },
    {
      "label": "Ma-tsu-Pai-chuan",
      "value": "CHS-MP"
    },
    {
      "label": "Shanghai",
      "value": "CHS-SH"
    },
    {
      "label": "Zhejiang",
      "value": "CHS-ZJ"
    },
    {
      "label": "Tibet",
      "value": "CHT"
    },
    {
      "label": "Xinjiang",
      "value": "CHX"
    },
    {
      "label": "Cocos (Keeling) Is.",
      "value": "CKI"
    },
    {
      "label": "Chile Central",
      "value": "CLC"
    },
    {
      "label": "Biobio",
      "value": "CLC-BI"
    },
    {
      "label": "Coquimbo",
      "value": "CLC-CO"
    },
    {
      "label": "La Araucania",
      "value": "CLC-LA"
    },
    {
      "label": "Maule",
      "value": "CLC-MA"
    },
    {
      "label": "O'Higgins",
      "value": "CLC-OH"
    },
    {
      "label": "Santiago",
      "value": "CLC-SA"
    },
    {
      "label": "Valparaiso",
      "value": "CLC-VA"
    },
    {
      "label": "Colombia",
      "value": "CLM"
    },
    {
      "label": "Chile North",
      "value": "CLN"
    },
    {
      "label": "Antofagasta",
      "value": "CLN-AN"
    },
    {
      "label": "Atacama",
      "value": "CLN-AT"
    },
    {
      "label": "Tarapaca",
      "value": "CLN-TA"
    },
    {
      "label": "Chile South",
      "value": "CLS"
    },
    {
      "label": "Aisen",
      "value": "CLS-AI"
    },
    {
      "label": "Los Lagos",
      "value": "CLS-LL"
    },
    {
      "label": "Magellanes",
      "value": "CLS-MG"
    },
    {
      "label": "Cameroon",
      "value": "CMN"
    },
    {
      "label": "Connecticut",
      "value": "CNT"
    },
    {
      "label": "Canary Is.",
      "value": "CNY"
    },
    {
      "label": "Colorado",
      "value": "COL"
    },
    {
      "label": "Comoros",
      "value": "COM"
    },
    {
      "label": "Comoros",
      "value": "COM-CO"
    },
    {
      "label": "Mayotte",
      "value": "COM-MA"
    },
    {
      "label": "Congo",
      "value": "CON"
    },
    {
      "label": "Cook Is.",
      "value": "COO"
    },
    {
      "label": "Corse",
      "value": "COR"
    },
    {
      "label": "Costa Rica",
      "value": "COS"
    },
    {
      "label": "Central American Pacific Is.",
      "value": "CPI"
    },
    {
      "label": "Clipperton I.",
      "value": "CPI-CL"
    },
    {
      "label": "Cocos I.",
      "value": "CPI-CO"
    },
    {
      "label": "Malpelo I.",
      "value": "CPI-MA"
    },
    {
      "label": "Cape Provinces",
      "value": "CPP"
    },
    {
      "label": "Eastern Cape Province",
      "value": "CPP-EC"
    },
    {
      "label": "Northern Cape Province",
      "value": "CPP-NC"
    },
    {
      "label": "Western Cape Province",
      "value": "CPP-WC"
    },
    {
      "label": "Caprivi Strip",
      "value": "CPV"
    },
    {
      "label": "Caroline Is.",
      "value": "CRL"
    },
    {
      "label": "Micronesia Federated States",
      "value": "CRL-MF"
    },
    {
      "label": "Palau",
      "value": "CRL-PA"
    },
    {
      "label": "Crozet Is.",
      "value": "CRZ"
    },
    {
      "label": "Chita",
      "value": "CTA"
    },
    {
      "label": "Chatham Is.",
      "value": "CTM"
    },
    {
      "label": "Cuba",
      "value": "CUB"
    },
    {
      "label": "Cape Verde",
      "value": "CVI"
    },
    {
      "label": "Cyprus",
      "value": "CYP"
    },
    {
      "label": "Czechoslovakia",
      "value": "CZE"
    },
    {
      "label": "Czech Republic",
      "value": "CZE-CZ"
    },
    {
      "label": "Slovakia",
      "value": "CZE-SL"
    },
    {
      "label": "Delaware",
      "value": "DEL"
    },
    {
      "label": "Denmark",
      "value": "DEN"
    },
    {
      "label": "Djibouti",
      "value": "DJI"
    },
    {
      "label": "Dominican Republic",
      "value": "DOM"
    },
    {
      "label": "Desventurados Is.",
      "value": "DSV"
    },
    {
      "label": "East Aegean Is.",
      "value": "EAI"
    },
    {
      "label": "Easter Is.",
      "value": "EAS"
    },
    {
      "label": "Ecuador",
      "value": "ECU"
    },
    {
      "label": "Egypt",
      "value": "EGY"
    },
    {
      "label": "East Himalaya",
      "value": "EHM"
    },
    {
      "label": "Arunachal Pradesh",
      "value": "EHM-AP"
    },
    {
      "label": "Bhutan",
      "value": "EHM-BH"
    },
    {
      "label": "Darjiling",
      "value": "EHM-DJ"
    },
    {
      "label": "Sikkim",
      "value": "EHM-SI"
    },
    {
      "label": "El Salvador",
      "value": "ELS"
    },
    {
      "label": "Equatorial Guinea",
      "value": "EQG"
    },
    {
      "label": "Eritrea",
      "value": "ERI"
    },
    {
      "label": "Ethiopia",
      "value": "ETH"
    },
    {
      "label": "Falkland Is.",
      "value": "FAL"
    },
    {
      "label": "Fiji",
      "value": "FIJ"
    },
    {
      "label": "Finland",
      "value": "FIN"
    },
    {
      "label": "Florida",
      "value": "FLA"
    },
    {
      "label": "Føroyar",
      "value": "FOR"
    },
    {
      "label": "France",
      "value": "FRA"
    },
    {
      "label": "Channel Is.",
      "value": "FRA-CI"
    },
    {
      "label": "France",
      "value": "FRA-FR"
    },
    {
      "label": "Monaco",
      "value": "FRA-MO"
    },
    {
      "label": "French Guiana",
      "value": "FRG"
    },
    {
      "label": "Gabon",
      "value": "GAB"
    },
    {
      "label": "Galápagos",
      "value": "GAL"
    },
    {
      "label": "Gambia, The",
      "value": "GAM"
    },
    {
      "label": "Georgia",
      "value": "GEO"
    },
    {
      "label": "Germany",
      "value": "GER"
    },
    {
      "label": "Gulf of Guinea Is.",
      "value": "GGI"
    },
    {
      "label": "Annobón",
      "value": "GGI-AN"
    },
    {
      "label": "Bioko",
      "value": "GGI-BI"
    },
    {
      "label": "Príncipe",
      "value": "GGI-PR"
    },
    {
      "label": "São Tomé",
      "value": "GGI-ST"
    },
    {
      "label": "Ghana",
      "value": "GHA"
    },
    {
      "label": "Gilbert Is.",
      "value": "GIL"
    },
    {
      "label": "Guinea-Bissau",
      "value": "GNB"
    },
    {
      "label": "Greenland",
      "value": "GNL"
    },
    {
      "label": "Great Britain",
      "value": "GRB"
    },
    {
      "label": "Greece",
      "value": "GRC"
    },
    {
      "label": "Gulf States",
      "value": "GST"
    },
    {
      "label": "Bahrain",
      "value": "GST-BA"
    },
    {
      "label": "Qatar",
      "value": "GST-QA"
    },
    {
      "label": "United Arab Emirates",
      "value": "GST-UA"
    },
    {
      "label": "Guatemala",
      "value": "GUA"
    },
    {
      "label": "Guinea",
      "value": "GUI"
    },
    {
      "label": "Guyana",
      "value": "GUY"
    },
    {
      "label": "Haiti",
      "value": "HAI"
    },
    {
      "label": "Haiti",
      "value": "HAI-HA"
    },
    {
      "label": "Navassa I.",
      "value": "HAI-NI"
    },
    {
      "label": "Hawaii",
      "value": "HAW"
    },
    {
      "label": "Hawaiian Is.",
      "value": "HAW-HI"
    },
    {
      "label": "Johnston I.",
      "value": "HAW-JI"
    },
    {
      "label": "Midway Is.",
      "value": "HAW-MI"
    },
    {
      "label": "Howland-Baker Is.",
      "value": "HBI"
    },
    {
      "label": "Heard-McDonald Is.",
      "value": "HMD"
    },
    {
      "label": "Honduras",
      "value": "HON"
    },
    {
      "label": "Hungary",
      "value": "HUN"
    },
    {
      "label": "Iceland",
      "value": "ICE"
    },
    {
      "label": "Idaho",
      "value": "IDA"
    },
    {
      "label": "Illinois",
      "value": "ILL"
    },
    {
      "label": "India",
      "value": "IND"
    },
    {
      "label": "Andhra Pradesh",
      "value": "IND-AP"
    },
    {
      "label": "Bihar",
      "value": "IND-BI"
    },
    {
      "label": "Chandigarh",
      "value": "IND-CH"
    },
    {
      "label": "Chhattisgarh",
      "value": "IND-CT"
    },
    {
      "label": "Dadra-Nagar-Haveli",
      "value": "IND-DD"
    },
    {
      "label": "Delhi",
      "value": "IND-DE"
    },
    {
      "label": "Diu",
      "value": "IND-DI"
    },
    {
      "label": "Daman",
      "value": "IND-DM"
    },
    {
      "label": "Goa",
      "value": "IND-GO"
    },
    {
      "label": "Gujarat",
      "value": "IND-GU"
    },
    {
      "label": "Haryana",
      "value": "IND-HA"
    },
    {
      "label": "Jharkhand",
      "value": "IND-JK"
    },
    {
      "label": "Kerala",
      "value": "IND-KE"
    },
    {
      "label": "Karaikal",
      "value": "IND-KL"
    },
    {
      "label": "Karnataka",
      "value": "IND-KT"
    },
    {
      "label": "Mahe",
      "value": "IND-MH"
    },
    {
      "label": "Madhya Pradesh",
      "value": "IND-MP"
    },
    {
      "label": "Maharashtra",
      "value": "IND-MR"
    },
    {
      "label": "Orissa",
      "value": "IND-OR"
    },
    {
      "label": "Pondicherry",
      "value": "IND-PO"
    },
    {
      "label": "Punjab",
      "value": "IND-PU"
    },
    {
      "label": "Rajasthan",
      "value": "IND-RA"
    },
    {
      "label": "Tamil Nadu",
      "value": "IND-TN"
    },
    {
      "label": "Uttar Pradesh",
      "value": "IND-UP"
    },
    {
      "label": "West Bengal",
      "value": "IND-WB"
    },
    {
      "label": "Yanam",
      "value": "IND-YA"
    },
    {
      "label": "Indiana",
      "value": "INI"
    },
    {
      "label": "Iowa",
      "value": "IOW"
    },
    {
      "label": "Ireland",
      "value": "IRE"
    },
    {
      "label": "Ireland",
      "value": "IRE-IR"
    },
    {
      "label": "Northern Ireland",
      "value": "IRE-NI"
    },
    {
      "label": "Irkutsk",
      "value": "IRK"
    },
    {
      "label": "Iran",
      "value": "IRN"
    },
    {
      "label": "Iraq",
      "value": "IRQ"
    },
    {
      "label": "Italy",
      "value": "ITA"
    },
    {
      "label": "Italy",
      "value": "ITA-IT"
    },
    {
      "label": "San Marino",
      "value": "ITA-SM"
    },
    {
      "label": "Vatican City",
      "value": "ITA-VC"
    },
    {
      "label": "Ivory Coast",
      "value": "IVO"
    },
    {
      "label": "Jamaica",
      "value": "JAM"
    },
    {
      "label": "Japan",
      "value": "JAP"
    },
    {
      "label": "Hokkaido",
      "value": "JAP-HK"
    },
    {
      "label": "Honshu",
      "value": "JAP-HN"
    },
    {
      "label": "Kyushu",
      "value": "JAP-KY"
    },
    {
      "label": "Shikoku",
      "value": "JAP-SH"
    },
    {
      "label": "Jawa",
      "value": "JAW"
    },
    {
      "label": "Juan Fernández Is.",
      "value": "JNF"
    },
    {
      "label": "Kamchatka",
      "value": "KAM"
    },
    {
      "label": "Kansas",
      "value": "KAN"
    },
    {
      "label": "Kazakhstan",
      "value": "KAZ"
    },
    {
      "label": "Kerguelen",
      "value": "KEG"
    },
    {
      "label": "Kenya",
      "value": "KEN"
    },
    {
      "label": "Kermadec Is.",
      "value": "KER"
    },
    {
      "label": "Kirgizistan",
      "value": "KGZ"
    },
    {
      "label": "Khabarovsk",
      "value": "KHA"
    },
    {
      "label": "Korea",
      "value": "KOR"
    },
    {
      "label": "North Korea",
      "value": "KOR-NK"
    },
    {
      "label": "South Korea",
      "value": "KOR-SK"
    },
    {
      "label": "Krasnoyarsk",
      "value": "KRA"
    },
    {
      "label": "Kriti",
      "value": "KRI"
    },
    {
      "label": "Krym",
      "value": "KRY"
    },
    {
      "label": "Kentucky",
      "value": "KTY"
    },
    {
      "label": "Kuril Is.",
      "value": "KUR"
    },
    {
      "label": "Kuwait",
      "value": "KUW"
    },
    {
      "label": "Kazan-retto",
      "value": "KZN"
    },
    {
      "label": "Labrador",
      "value": "LAB"
    },
    {
      "label": "Laos",
      "value": "LAO"
    },
    {
      "label": "Liberia",
      "value": "LBR"
    },
    {
      "label": "Lebanon-Syria",
      "value": "LBS"
    },
    {
      "label": "Lebanon",
      "value": "LBS-LB"
    },
    {
      "label": "Syria",
      "value": "LBS-SY"
    },
    {
      "label": "Libya",
      "value": "LBY"
    },
    {
      "label": "Laccadive Is.",
      "value": "LDV"
    },
    {
      "label": "Leeward Is.",
      "value": "LEE"
    },
    {
      "label": "Antigua-Barbuda",
      "value": "LEE-AB"
    },
    {
      "label": "Anguilla",
      "value": "LEE-AG"
    },
    {
      "label": "Aves I.",
      "value": "LEE-AV"
    },
    {
      "label": "British Virgin Is.",
      "value": "LEE-BV"
    },
    {
      "label": "Guadeloupe",
      "value": "LEE-GU"
    },
    {
      "label": "Montserrat",
      "value": "LEE-MO"
    },
    {
      "label": "Netherlands Leeward Is.",
      "value": "LEE-NL"
    },
    {
      "label": "St. Kitts-Nevis",
      "value": "LEE-SK"
    },
    {
      "label": "St. Martin-St. Barthelemy",
      "value": "LEE-SM"
    },
    {
      "label": "Virgin Is.",
      "value": "LEE-VI"
    },
    {
      "label": "Lesotho",
      "value": "LES"
    },
    {
      "label": "Line Is.",
      "value": "LIN"
    },
    {
      "label": "Kiribati Line Is.",
      "value": "LIN-KI"
    },
    {
      "label": "U.S. Line Is.",
      "value": "LIN-US"
    },
    {
      "label": "Louisiana",
      "value": "LOU"
    },
    {
      "label": "Lesser Sunda Is.",
      "value": "LSI"
    },
    {
      "label": "Bali",
      "value": "LSI-BA"
    },
    {
      "label": "East Timor",
      "value": "LSI-ET"
    },
    {
      "label": "Lesser Sunda Is.",
      "value": "LSI-LS"
    },
    {
      "label": "Magadan",
      "value": "MAG"
    },
    {
      "label": "Maine",
      "value": "MAI"
    },
    {
      "label": "Manitoba",
      "value": "MAN"
    },
    {
      "label": "Macquarie Is.",
      "value": "MAQ"
    },
    {
      "label": "Massachusetts",
      "value": "MAS"
    },
    {
      "label": "Mauritius",
      "value": "MAU"
    },
    {
      "label": "Mozambique Channel Is.",
      "value": "MCI"
    },
    {
      "label": "Marcus I.",
      "value": "MCS"
    },
    {
      "label": "Madagascar",
      "value": "MDG"
    },
    {
      "label": "Madeira",
      "value": "MDR"
    },
    {
      "label": "Maldives",
      "value": "MDV"
    },
    {
      "label": "Michigan",
      "value": "MIC"
    },
    {
      "label": "Minnesota",
      "value": "MIN"
    },
    {
      "label": "Mali",
      "value": "MLI"
    },
    {
      "label": "Malawi",
      "value": "MLW"
    },
    {
      "label": "Malaya",
      "value": "MLY"
    },
    {
      "label": "Peninsular Malaysia",
      "value": "MLY-PM"
    },
    {
      "label": "Singapore",
      "value": "MLY-SI"
    },
    {
      "label": "Montana",
      "value": "MNT"
    },
    {
      "label": "Maluku",
      "value": "MOL"
    },
    {
      "label": "Mongolia",
      "value": "MON"
    },
    {
      "label": "Morocco",
      "value": "MOR"
    },
    {
      "label": "Morocco",
      "value": "MOR-MO"
    },
    {
      "label": "Spanish North African Territories",
      "value": "MOR-SP"
    },
    {
      "label": "Mozambique",
      "value": "MOZ"
    },
    {
      "label": "Marion-Prince Edward Is.",
      "value": "MPE"
    },
    {
      "label": "Marianas",
      "value": "MRN"
    },
    {
      "label": "Guam",
      "value": "MRN-GU"
    },
    {
      "label": "Northern Marianas",
      "value": "MRN-NM"
    },
    {
      "label": "Marquesas",
      "value": "MRQ"
    },
    {
      "label": "Marshall Is.",
      "value": "MRS"
    },
    {
      "label": "Maryland",
      "value": "MRY"
    },
    {
      "label": "Mississippi",
      "value": "MSI"
    },
    {
      "label": "Missouri",
      "value": "MSO"
    },
    {
      "label": "Mauritania",
      "value": "MTN"
    },
    {
      "label": "Mexico Central",
      "value": "MXC"
    },
    {
      "label": "Mexico Distrito Federal",
      "value": "MXC-DF"
    },
    {
      "label": "Mexico State",
      "value": "MXC-ME"
    },
    {
      "label": "Morelos",
      "value": "MXC-MO"
    },
    {
      "label": "Puebla",
      "value": "MXC-PU"
    },
    {
      "label": "Tlaxcala",
      "value": "MXC-TL"
    },
    {
      "label": "Mexico Northeast",
      "value": "MXE"
    },
    {
      "label": "Aguascalientes",
      "value": "MXE-AG"
    },
    {
      "label": "Coahuila",
      "value": "MXE-CO"
    },
    {
      "label": "Chihuahua",
      "value": "MXE-CU"
    },
    {
      "label": "Durango",
      "value": "MXE-DU"
    },
    {
      "label": "Guanajuato",
      "value": "MXE-GU"
    },
    {
      "label": "Hidalgo",
      "value": "MXE-HI"
    },
    {
      "label": "Nuevo León",
      "value": "MXE-NL"
    },
    {
      "label": "Querétaro",
      "value": "MXE-QU"
    },
    {
      "label": "San Luis Potosí",
      "value": "MXE-SL"
    },
    {
      "label": "Tamaulipas",
      "value": "MXE-TA"
    },
    {
      "label": "Zacatecas",
      "value": "MXE-ZA"
    },
    {
      "label": "Mexico Gulf",
      "value": "MXG"
    },
    {
      "label": "Veracruz",
      "value": "MXG-VC"
    },
    {
      "label": "Mexican Pacific Is.",
      "value": "MXI"
    },
    {
      "label": "Guadalupe I.",
      "value": "MXI-GU"
    },
    {
      "label": "Rocas Alijos",
      "value": "MXI-RA"
    },
    {
      "label": "Revillagigedo Is.",
      "value": "MXI-RG"
    },
    {
      "label": "Mexico Northwest",
      "value": "MXN"
    },
    {
      "label": "Baja California",
      "value": "MXN-BC"
    },
    {
      "label": "Baja California Sur",
      "value": "MXN-BS"
    },
    {
      "label": "Sinaloa",
      "value": "MXN-SI"
    },
    {
      "label": "Sonora",
      "value": "MXN-SO"
    },
    {
      "label": "Mexico Southwest",
      "value": "MXS"
    },
    {
      "label": "Colima",
      "value": "MXS-CL"
    },
    {
      "label": "Guerrero",
      "value": "MXS-GR"
    },
    {
      "label": "Jalisco",
      "value": "MXS-JA"
    },
    {
      "label": "Michoacan",
      "value": "MXS-MI"
    },
    {
      "label": "Nayarit",
      "value": "MXS-NA"
    },
    {
      "label": "Oaxaca",
      "value": "MXS-OA"
    },
    {
      "label": "Mexico Southeast",
      "value": "MXT"
    },
    {
      "label": "Campeche",
      "value": "MXT-CA"
    },
    {
      "label": "Chiapas",
      "value": "MXT-CI"
    },
    {
      "label": "Quintana Roo",
      "value": "MXT-QR"
    },
    {
      "label": "Tabasco",
      "value": "MXT-TB"
    },
    {
      "label": "Yucatán",
      "value": "MXT-YU"
    },
    {
      "label": "Myanmar",
      "value": "MYA"
    },
    {
      "label": "Namibia",
      "value": "NAM"
    },
    {
      "label": "KwaZulu-Natal",
      "value": "NAT"
    },
    {
      "label": "New Brunswick",
      "value": "NBR"
    },
    {
      "label": "North Carolina",
      "value": "NCA"
    },
    {
      "label": "Nicobar Is.",
      "value": "NCB"
    },
    {
      "label": "North Caucasus",
      "value": "NCS"
    },
    {
      "label": "Chechnya",
      "value": "NCS-CH"
    },
    {
      "label": "Dagestan",
      "value": "NCS-DA"
    },
    {
      "label": "Ingushetiya",
      "value": "NCS-IN"
    },
    {
      "label": "Kabardino-Balkariya",
      "value": "NCS-KB"
    },
    {
      "label": "Karacheyevo-Cherkessiya",
      "value": "NCS-KC"
    },
    {
      "label": "Krasnodar",
      "value": "NCS-KR"
    },
    {
      "label": "Severo-Osetiya",
      "value": "NCS-SO"
    },
    {
      "label": "Stavropol",
      "value": "NCS-ST"
    },
    {
      "label": "North Dakota",
      "value": "NDA"
    },
    {
      "label": "Nebraska",
      "value": "NEB"
    },
    {
      "label": "Nepal",
      "value": "NEP"
    },
    {
      "label": "Netherlands",
      "value": "NET"
    },
    {
      "label": "Nevada",
      "value": "NEV"
    },
    {
      "label": "Norfolk Is.",
      "value": "NFK"
    },
    {
      "label": "Lord Howe I.",
      "value": "NFK-LH"
    },
    {
      "label": "Norfolk I.",
      "value": "NFK-NI"
    },
    {
      "label": "Newfoundland",
      "value": "NFL"
    },
    {
      "label": "Newfoundland",
      "value": "NFL-NE"
    },
    {
      "label": "St. Pierre-Miquelon",
      "value": "NFL-SP"
    },
    {
      "label": "Nigeria",
      "value": "NGA"
    },
    {
      "label": "Niger",
      "value": "NGR"
    },
    {
      "label": "Nicaragua",
      "value": "NIC"
    },
    {
      "label": "Netherlands Antilles",
      "value": "NLA"
    },
    {
      "label": "Bonaire",
      "value": "NLA-BO"
    },
    {
      "label": "Curaçao",
      "value": "NLA-CU"
    },
    {
      "label": "Nansei-shoto",
      "value": "NNS"
    },
    {
      "label": "Norway",
      "value": "NOR"
    },
    {
      "label": "Nauru",
      "value": "NRU"
    },
    {
      "label": "Nova Scotia",
      "value": "NSC"
    },
    {
      "label": "New South Wales",
      "value": "NSW"
    },
    {
      "label": "Australian Capital Territory",
      "value": "NSW-CT"
    },
    {
      "label": "New South Wales",
      "value": "NSW-NS"
    },
    {
      "label": "Northern Territory",
      "value": "NTA"
    },
    {
      "label": "Niue",
      "value": "NUE"
    },
    {
      "label": "Nunavut",
      "value": "NUN"
    },
    {
      "label": "New Caledonia",
      "value": "NWC"
    },
    {
      "label": "New Guinea",
      "value": "NWG"
    },
    {
      "label": "Irian Jaya",
      "value": "NWG-IJ"
    },
    {
      "label": "Papua New Guinea",
      "value": "NWG-PN"
    },
    {
      "label": "New Hampshire",
      "value": "NWH"
    },
    {
      "label": "New Jersey",
      "value": "NWJ"
    },
    {
      "label": "New Mexico",
      "value": "NWM"
    },
    {
      "label": "Northwest Territories",
      "value": "NWT"
    },
    {
      "label": "New York",
      "value": "NWY"
    },
    {
      "label": "New Zealand North",
      "value": "NZN"
    },
    {
      "label": "New Zealand South",
      "value": "NZS"
    },
    {
      "label": "Free State",
      "value": "OFS"
    },
    {
      "label": "Ogasawara-shoto",
      "value": "OGA"
    },
    {
      "label": "Ohio",
      "value": "OHI"
    },
    {
      "label": "Oklahoma",
      "value": "OKL"
    },
    {
      "label": "Oman",
      "value": "OMA"
    },
    {
      "label": "Ontario",
      "value": "ONT"
    },
    {
      "label": "Oregon",
      "value": "ORE"
    },
    {
      "label": "Pakistan",
      "value": "PAK"
    },
    {
      "label": "Palestine",
      "value": "PAL"
    },
    {
      "label": "Israel",
      "value": "PAL-IS"
    },
    {
      "label": "Jordan",
      "value": "PAL-JO"
    },
    {
      "label": "Panama",
      "value": "PAN"
    },
    {
      "label": "Paraguay",
      "value": "PAR"
    },
    {
      "label": "Prince Edward I.",
      "value": "PEI"
    },
    {
      "label": "Pennsylvania",
      "value": "PEN"
    },
    {
      "label": "Peru",
      "value": "PER"
    },
    {
      "label": "Philippines",
      "value": "PHI"
    },
    {
      "label": "Phoenix Is.",
      "value": "PHX"
    },
    {
      "label": "Pitcairn Is.",
      "value": "PIT"
    },
    {
      "label": "Poland",
      "value": "POL"
    },
    {
      "label": "Portugal",
      "value": "POR"
    },
    {
      "label": "Primorye",
      "value": "PRM"
    },
    {
      "label": "Puerto Rico",
      "value": "PUE"
    },
    {
      "label": "Queensland",
      "value": "QLD"
    },
    {
      "label": "Coral Sea Is. Territory",
      "value": "QLD-CS"
    },
    {
      "label": "Queensland",
      "value": "QLD-QU"
    },
    {
      "label": "Québec",
      "value": "QUE"
    },
    {
      "label": "Réunion",
      "value": "REU"
    },
    {
      "label": "Rhode I.",
      "value": "RHO"
    },
    {
      "label": "Rodrigues",
      "value": "ROD"
    },
    {
      "label": "Romania",
      "value": "ROM"
    },
    {
      "label": "Central European Russia",
      "value": "RUC"
    },
    {
      "label": "East European Russia",
      "value": "RUE"
    },
    {
      "label": "North European Russia",
      "value": "RUN"
    },
    {
      "label": "South European Russia",
      "value": "RUS"
    },
    {
      "label": "Northwest European Russia",
      "value": "RUW"
    },
    {
      "label": "Rwanda",
      "value": "RWA"
    },
    {
      "label": "Sakhalin",
      "value": "SAK"
    },
    {
      "label": "Samoa",
      "value": "SAM"
    },
    {
      "label": "American Samoa",
      "value": "SAM-AS"
    },
    {
      "label": "Samoa",
      "value": "SAM-WS"
    },
    {
      "label": "Sardegna",
      "value": "SAR"
    },
    {
      "label": "Saskatchewan",
      "value": "SAS"
    },
    {
      "label": "Saudi Arabia",
      "value": "SAU"
    },
    {
      "label": "South Carolina",
      "value": "SCA"
    },
    {
      "label": "Society Is.",
      "value": "SCI"
    },
    {
      "label": "South China Sea",
      "value": "SCS"
    },
    {
      "label": "Paracel Is.",
      "value": "SCS-PI"
    },
    {
      "label": "Spratly Is.",
      "value": "SCS-SI"
    },
    {
      "label": "Santa Cruz Is.",
      "value": "SCZ"
    },
    {
      "label": "South Dakota",
      "value": "SDA"
    },
    {
      "label": "Selvagens",
      "value": "SEL"
    },
    {
      "label": "Senegal",
      "value": "SEN"
    },
    {
      "label": "Seychelles",
      "value": "SEY"
    },
    {
      "label": "South Georgia",
      "value": "SGE"
    },
    {
      "label": "Sicilia",
      "value": "SIC"
    },
    {
      "label": "Malta",
      "value": "SIC-MA"
    },
    {
      "label": "Sicilia",
      "value": "SIC-SI"
    },
    {
      "label": "Sierra Leone",
      "value": "SIE"
    },
    {
      "label": "Sinai",
      "value": "SIN"
    },
    {
      "label": "South Australia",
      "value": "SOA"
    },
    {
      "label": "Socotra",
      "value": "SOC"
    },
    {
      "label": "Solomon Is.",
      "value": "SOL"
    },
    {
      "label": "North Solomons",
      "value": "SOL-NO"
    },
    {
      "label": "South Solomons",
      "value": "SOL-SO"
    },
    {
      "label": "Somalia",
      "value": "SOM"
    },
    {
      "label": "Spain",
      "value": "SPA"
    },
    {
      "label": "Andorra",
      "value": "SPA-AN"
    },
    {
      "label": "Gibraltar",
      "value": "SPA-GI"
    },
    {
      "label": "Spain",
      "value": "SPA-SP"
    },
    {
      "label": "Sri Lanka",
      "value": "SRL"
    },
    {
      "label": "South Sandwich Is.",
      "value": "SSA"
    },
    {
      "label": "St.Helena",
      "value": "STH"
    },
    {
      "label": "Sudan",
      "value": "SUD"
    },
    {
      "label": "Sulawesi",
      "value": "SUL"
    },
    {
      "label": "Sumatera",
      "value": "SUM"
    },
    {
      "label": "Suriname",
      "value": "SUR"
    },
    {
      "label": "Svalbard",
      "value": "SVA"
    },
    {
      "label": "Southwest Caribbean",
      "value": "SWC"
    },
    {
      "label": "Colombian Caribbean Is.",
      "value": "SWC-CC"
    },
    {
      "label": "Honduran Caribbean Is.",
      "value": "SWC-HC"
    },
    {
      "label": "Nicaraguan Caribbean Is.",
      "value": "SWC-NC"
    },
    {
      "label": "Sweden",
      "value": "SWE"
    },
    {
      "label": "Switzerland",
      "value": "SWI"
    },
    {
      "label": "Swaziland",
      "value": "SWZ"
    },
    {
      "label": "Taiwan",
      "value": "TAI"
    },
    {
      "label": "Tanzania",
      "value": "TAN"
    },
    {
      "label": "Tasmania",
      "value": "TAS"
    },
    {
      "label": "Turks-Caicos Is.",
      "value": "TCI"
    },
    {
      "label": "Transcaucasus",
      "value": "TCS"
    },
    {
      "label": "Abkhaziya",
      "value": "TCS-AB"
    },
    {
      "label": "Adzhariya",
      "value": "TCS-AD"
    },
    {
      "label": "Armenia",
      "value": "TCS-AR"
    },
    {
      "label": "Azerbaijan",
      "value": "TCS-AZ"
    },
    {
      "label": "Gruziya",
      "value": "TCS-GR"
    },
    {
      "label": "Nakhichevan",
      "value": "TCS-NA"
    },
    {
      "label": "Nagorno Karabakh",
      "value": "TCS-NK"
    },
    {
      "label": "Tristan da Cunha",
      "value": "TDC"
    },
    {
      "label": "Tennessee",
      "value": "TEN"
    },
    {
      "label": "Texas",
      "value": "TEX"
    },
    {
      "label": "Thailand",
      "value": "THA"
    },
    {
      "label": "Turkmenistan",
      "value": "TKM"
    },
    {
      "label": "Togo",
      "value": "TOG"
    },
    {
      "label": "Tokelau-Manihiki",
      "value": "TOK"
    },
    {
      "label": "Manihiki Is.",
      "value": "TOK-MA"
    },
    {
      "label": "Swains I.",
      "value": "TOK-SW"
    },
    {
      "label": "Tokelau",
      "value": "TOK-TO"
    },
    {
      "label": "Tonga",
      "value": "TON"
    },
    {
      "label": "Trinidad-Tobago",
      "value": "TRT"
    },
    {
      "label": "Tuamotu",
      "value": "TUA"
    },
    {
      "label": "Tubuai Is.",
      "value": "TUB"
    },
    {
      "label": "Turkey-in-Europe",
      "value": "TUE"
    },
    {
      "label": "Tunisia",
      "value": "TUN"
    },
    {
      "label": "Turkey",
      "value": "TUR"
    },
    {
      "label": "Tuvalu",
      "value": "TUV"
    },
    {
      "label": "Tuva",
      "value": "TVA"
    },
    {
      "label": "Northern Provinces",
      "value": "TVL"
    },
    {
      "label": "Gauteng",
      "value": "TVL-GA"
    },
    {
      "label": "Mpumalanga",
      "value": "TVL-MP"
    },
    {
      "label": "Northern Province",
      "value": "TVL-NP"
    },
    {
      "label": "North-West Province",
      "value": "TVL-NW"
    },
    {
      "label": "Tadzhikistan",
      "value": "TZK"
    },
    {
      "label": "Uganda",
      "value": "UGA"
    },
    {
      "label": "Ukraine",
      "value": "UKR"
    },
    {
      "label": "Moldova",
      "value": "UKR-MO"
    },
    {
      "label": "Ukraine",
      "value": "UKR-UK"
    },
    {
      "label": "Uruguay",
      "value": "URU"
    },
    {
      "label": "Utah",
      "value": "UTA"
    },
    {
      "label": "Uzbekistan",
      "value": "UZB"
    },
    {
      "label": "Vanuatu",
      "value": "VAN"
    },
    {
      "label": "Venezuela",
      "value": "VEN"
    },
    {
      "label": "Vermont",
      "value": "VER"
    },
    {
      "label": "Victoria",
      "value": "VIC"
    },
    {
      "label": "Vietnam",
      "value": "VIE"
    },
    {
      "label": "Venezuelan Antilles",
      "value": "VNA"
    },
    {
      "label": "Virginia",
      "value": "VRG"
    },
    {
      "label": "Wake I.",
      "value": "WAK"
    },
    {
      "label": "Wallis-Futuna Is.",
      "value": "WAL"
    },
    {
      "label": "Washington",
      "value": "WAS"
    },
    {
      "label": "Western Australia",
      "value": "WAU"
    },
    {
      "label": "Ashmore-Cartier Is.",
      "value": "WAU-AC"
    },
    {
      "label": "Western Australia",
      "value": "WAU-WA"
    },
    {
      "label": "District of Columbia",
      "value": "WDC"
    },
    {
      "label": "West Himalaya",
      "value": "WHM"
    },
    {
      "label": "Himachal Pradesh",
      "value": "WHM-HP"
    },
    {
      "label": "Jammu-Kashmir",
      "value": "WHM-JK"
    },
    {
      "label": "Uttaranchal",
      "value": "WHM-UT"
    },
    {
      "label": "Windward Is.",
      "value": "WIN"
    },
    {
      "label": "Barbados",
      "value": "WIN-BA"
    },
    {
      "label": "Dominica",
      "value": "WIN-DO"
    },
    {
      "label": "Grenada",
      "value": "WIN-GR"
    },
    {
      "label": "Martinique",
      "value": "WIN-MA"
    },
    {
      "label": "St. Lucia",
      "value": "WIN-SL"
    },
    {
      "label": "St. Vincent",
      "value": "WIN-SV"
    },
    {
      "label": "Wisconsin",
      "value": "WIS"
    },
    {
      "label": "Western Sahara",
      "value": "WSA"
    },
    {
      "label": "West Siberia",
      "value": "WSB"
    },
    {
      "label": "West Virginia",
      "value": "WVA"
    },
    {
      "label": "Wyoming",
      "value": "WYO"
    },
    {
      "label": "Christmas I.",
      "value": "XMS"
    },
    {
      "label": "Yakutskiya",
      "value": "YAK"
    },
    {
      "label": "Yemen",
      "value": "YEM"
    },
    {
      "label": "North Yemen",
      "value": "YEM-NY"
    },
    {
      "label": "South Yemen",
      "value": "YEM-SY"
    },
    {
      "label": "Yugoslavia",
      "value": "YUG"
    },
    {
      "label": "Bosnia- Herzegovina",
      "value": "YUG-BH"
    },
    {
      "label": "Croatia",
      "value": "YUG-CR"
    },
    {
      "label": "Kosovo",
      "value": "YUG-KO"
    },
    {
      "label": "Macedonia",
      "value": "YUG-MA"
    },
    {
      "label": "Montenegro",
      "value": "YUG-MN"
    },
    {
      "label": "Serbia",
      "value": "YUG-SE"
    },
    {
      "label": "Slovenia",
      "value": "YUG-SL"
    },
    {
      "label": "Yukon",
      "value": "YUK"
    },
    {
      "label": "Zaire",
      "value": "ZAI"
    },
    {
      "label": "Zambia",
      "value": "ZAM"
    },
    {
      "label": "Zimbabwe",
      "value": "ZIM"
    }
  ]
}