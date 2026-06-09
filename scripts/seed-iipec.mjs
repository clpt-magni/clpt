import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN,
});

const rawData = {
  "industrial_training": [
    {
      "academic_year": "2023-2024 [cite: 1]",
      "batch": "2020-2024 [cite: 1]",
      "records": [
        {
          "company_name": "Green Park Bio-Sciences, Yanam. [cite: 2]",
          "date_from": "20/05/2024 [cite: 2]",
          "date_to": "20/06/2024 [cite: 2]",
          "no_of_students": 48
        },
        {
          "company_name": "APT Formulations, Pvt, Ltd., Surampalli. [cite: 2]",
          "date_from": "20/05/2024 [cite: 2]",
          "date_to": "20/06/2024 [cite: 2]",
          "no_of_students": 38
        },
        {
          "company_name": "Sodum Drugs and Pharmaceuticals, Pvt, Ltd., Bollaram. [cite: 2]",
          "date_from": "20/05/2024 [cite: 2]",
          "date_to": "20/06/2024 [cite: 2]",
          "no_of_students": 4
        },
        {
          "company_name": "Darwin Formulations, Pvt. Ltd., Gannavaram. [cite: 2]",
          "date_from": "20/05/2024 [cite: 2]",
          "date_to": "20/06/2024 [cite: 2]",
          "no_of_students": 2
        },
        {
          "company_name": "Chalapathi Drug Testing Laboratory, Guntur. [cite: 2]",
          "date_from": "20/05/2024 [cite: 2]",
          "date_to": "22/06/2024 [cite: 2]",
          "no_of_students": 2
        },
        {
          "company_name": "Saraca Laboratories, Pvt, Ltd., Hyderabad. [cite: 2]",
          "date_from": "20/05/2024 [cite: 2]",
          "date_to": "20/06/2024 [cite: 2]",
          "no_of_students": 1
        },
        {
          "company_name": "Ray Analytical Technologies, Pvt, Ltd., Hyderabad [cite: 2]",
          "date_from": "20/05/2024 [cite: 2]",
          "date_to": "20/06/2024 [cite: 2]",
          "no_of_students": 1
        },
        {
          "company_name": "BMR Hospital, Guntur. [cite: 2]",
          "date_from": "20/05/2024 [cite: 2]",
          "date_to": "20/06/2024 [cite: 2]",
          "no_of_students": 1
        }
      ],
      "total_students": 97
    },
    {
      "academic_year": "2022-2023 [cite: 3]",
      "batch": "2019-2023 [cite: 3]",
      "records": [
        {
          "company_name": "Darwin Research & Ayur Pharma. Pvt. Ltd., Gannavaram [cite: 4]",
          "date_from": "15/05/2023 [cite: 4]",
          "date_to": "17/06/2023 [cite: 4]",
          "no_of_students": 55
        },
        {
          "company_name": "Green Park Bio-Sciences, Yanam, [cite: 4]",
          "date_from": "15/05/2023 [cite: 4]",
          "date_to": "17/06/2023 [cite: 4]",
          "no_of_students": 46
        },
        {
          "company_name": "Chalapathi Drug Testing Laboratory, Guntur. [cite: 4]",
          "date_from": "08/06/2023 [cite: 4]",
          "date_to": "20/07/2023 [cite: 4]",
          "no_of_students": 2
        },
        {
          "company_name": "Mylan Laboratories Limited, Hyderabad [cite: 4]",
          "date_from": "19/06/2023 [cite: 4]",
          "date_to": "18/07/2023 [cite: 4]",
          "no_of_students": 2
        },
        {
          "company_name": "Artemis Biotech, Jeedimetla. Hyderabad [cite: 4]",
          "date_from": "22/05/2023 [cite: 4]",
          "date_to": "17/06/2023 [cite: 4]",
          "no_of_students": 1
        }
      ],
      "total_students": 106
    },
    {
      "academic_year": "2021-2022 [cite: 5]",
      "batch": "2018-2022 [cite: 5]",
      "records": [
        {
          "company_name": "Darwin Research & Ayur Pharma. Pvt. Ltd., Gannavaram [cite: 6]",
          "date_from": "25/02/2022 [cite: 6]",
          "date_to": "30/06/2022 [cite: 6]",
          "no_of_students": 45
        },
        {
          "company_name": "Green Park Bio-Sciences, Yanam, [cite: 6]",
          "date_from": "25/02/2022 [cite: 6]",
          "date_to": "30/06/2022 [cite: 6]",
          "no_of_students": 50
        },
        {
          "company_name": "Yontus Life Sciences Pvt. Ltd., Guntur [cite: 6]",
          "date_from": "06/05/2022 [cite: 6]",
          "date_to": "06/06/2022 [cite: 6]",
          "no_of_students": 1
        },
        {
          "company_name": "Chalapathi Drug Testing Laboratory, Guntur. [cite: 6]",
          "date_from": "25/02/2022 [cite: 6]",
          "date_to": "30/06/2022 [cite: 6]",
          "no_of_students": 3
        },
        {
          "company_name": "DGR Hospitals, Giddalur [cite: 6]",
          "date_from": "25/02/2022 [cite: 6]",
          "date_to": "30/06/2022 [cite: 6]",
          "no_of_students": 1
        },
        {
          "company_name": "Darwin Formulations Pvt. Ltd. [cite: 7]",
          "date_from": "23-08-2021 [cite: 7]",
          "date_to": "22-09-2021 [cite: 7]",
          "no_of_students": 18
        },
        {
          "company_name": "Darwin research & Ayur Pharma Pvt. Ltd. [cite: 7]",
          "date_from": "23-08-2021 [cite: 7]",
          "date_to": "22-09-2021 [cite: 7]",
          "no_of_students": 14
        },
        {
          "company_name": "Green Park Bio-Sciences Pvt. Ltd. [cite: 7]",
          "date_from": "23-08-2021 [cite: 7]",
          "date_to": "22-09-2021 [cite: 7]",
          "no_of_students": 22
        },
        {
          "company_name": "Chalapathi Drug Testing Laboratory [cite: 7]",
          "date_from": "24-08-2021 [cite: 7]",
          "date_to": "28-09-2021 [cite: 7]",
          "no_of_students": 22
        },
        {
          "company_name": "Yontus Life Sciences Pvt. Ltd. [cite: 7]",
          "date_from": "25-08-2021 [cite: 7]",
          "date_to": "29-09-2021 [cite: 7]",
          "no_of_students": 6
        }
      ],
      "total_students": 182
    },
    {
      "academic_year": "2020-2021 [cite: 8]",
      "batch": "2017-2021 [cite: 8]",
      "records": [
        {
          "company_name": "Actimus Biosciences Pvt. Ltd [cite: 9]",
          "date_from": "14-05-2019 [cite: 9]",
          "date_to": "04-06-2019 [cite: 9]",
          "no_of_students": 1
        },
        {
          "company_name": "Alapati Pharma [cite: 9]",
          "date_from": "10-05-2019 [cite: 9]",
          "date_to": "10-06-2019 [cite: 9]",
          "no_of_students": 4
        },
        {
          "company_name": "Amaravathi Institute of Medical Sciencs Pvt. Ltd [cite: 9]",
          "date_from": "10-05-2019 [cite: 9]",
          "date_to": "09-06-2019 [cite: 9]",
          "no_of_students": 2
        },
        {
          "company_name": "Ani Generics Pvt. Ltd [cite: 9]",
          "date_from": "10-05-2019 [cite: 9]",
          "date_to": "10-06-2019 [cite: 9]",
          "no_of_students": 1
        },
        {
          "company_name": "Ani Generics Pvt. Ltd [cite: 9]",
          "date_from": "06-05-2019 [cite: 9]",
          "date_to": "06-06-2019 [cite: 9]",
          "no_of_students": 3
        },
        {
          "company_name": "Ani Generics Pvt. Ltd [cite: 9]",
          "date_from": "01-05-2019 [cite: 9]",
          "date_to": "31-05-2019 [cite: 9]",
          "no_of_students": 1
        },
        {
          "company_name": "Area Hospital [cite: 9]",
          "date_from": "14-05-2019 [cite: 9]",
          "date_to": "07-06-2019 [cite: 9]",
          "no_of_students": 1
        },
        {
          "company_name": "Aurobindo Pharma [cite: 9]",
          "date_from": "09-05-2019 [cite: 9]",
          "date_to": "10-06-2019 [cite: 9]",
          "no_of_students": 1
        },
        {
          "company_name": "Chalapathi Drug Testing Laboratory [cite: 9]",
          "date_from": "06-05-2019 [cite: 9]",
          "date_to": "04-06-2019 [cite: 9]",
          "no_of_students": 3
        },
        {
          "company_name": "Chalapathi Drug Testing Laboratory [cite: 9]",
          "date_from": "06-05-2019 [cite: 9]",
          "date_to": "06-06-2019 [cite: 9]",
          "no_of_students": 2
        },
        {
          "company_name": "Coastal Care Hospital [cite: 9]",
          "date_from": "10-05-2019 [cite: 9]",
          "date_to": "09-06-2019 [cite: 9]",
          "no_of_students": 1
        },
        {
          "company_name": "Darwin Formulations Pvt. Ltd [cite: 9]",
          "date_from": "10-05-2019 [cite: 9]",
          "date_to": "10-06-2019 [cite: 9]",
          "no_of_students": 22
        },
        {
          "company_name": "Darwin Formulations Pvt. Ltd [cite: 9]",
          "date_from": "09-05-2019 [cite: 9]",
          "date_to": "08-06-2019 [cite: 9]",
          "no_of_students": 2
        },
        {
          "company_name": "Darwin Formulations Pvt. Ltd [cite: 9]",
          "date_from": "01-05-2019 [cite: 9]",
          "date_to": "31-05-2019 [cite: 9]",
          "no_of_students": 1
        },
        {
          "company_name": "Delexeel Pharma Pvt. Ltd [cite: 9]",
          "date_from": "13-05-2019 [cite: 9]",
          "date_to": "01-06-2019 [cite: 9]",
          "no_of_students": 1
        }
      ],
      "total_students": 46
    },
    {
      "academic_year": "2019-2020 [cite: 10]",
      "batch": "2016-2020 [cite: 10]",
      "records": [
        {
          "company_name": "DGR Multi-Specialty Hospital [cite: 11]",
          "date_from": "10-05-2019 [cite: 11]",
          "date_to": "10-06-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Government General Hospital [cite: 11]",
          "date_from": "18-05-2019 [cite: 11]",
          "date_to": "17-06-2019 [cite: 11]",
          "no_of_students": 3
        },
        {
          "company_name": "Granules India Pvt. Ltd [cite: 11]",
          "date_from": "13-06-2019 [cite: 11]",
          "date_to": "13-05-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Hetero Labs Pvt. Ltd [cite: 11]",
          "date_from": "11-06-2019 [cite: 11]",
          "date_to": "09-05-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Hetero Labs Pvt. Ltd [cite: 11]",
          "date_from": "13-05-2019 [cite: 11]",
          "date_to": "18-06-2019 [cite: 11]",
          "no_of_students": 2
        },
        {
          "company_name": "Hetero Labs Pvt. Ltd [cite: 11]",
          "date_from": "10-06-2019 [cite: 11]",
          "date_to": "11-05-2019 [cite: 11]",
          "no_of_students": 2
        },
        {
          "company_name": "Hetero Labs Pvt. Ltd [cite: 11]",
          "date_from": "20-06-2019 [cite: 11]",
          "date_to": "17-05-2019 [cite: 11]",
          "no_of_students": 2
        },
        {
          "company_name": "Indu Drugs Pvt. Ltd [cite: 11]",
          "date_from": "09-05-2019 [cite: 11]",
          "date_to": "06-06-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Innovare Labs Pvt. Ltd [cite: 11]",
          "date_from": "16-05-2019 [cite: 11]",
          "date_to": "15-06-2019 [cite: 11]",
          "no_of_students": 3
        },
        {
          "company_name": "Natco Pharma Ltd [cite: 11]",
          "date_from": "20-05-2019 [cite: 11]",
          "date_to": "19-06-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Navodaya Nursing Home [cite: 11]",
          "date_from": "31-08-2020 [cite: 11]",
          "date_to": "01-08-2020 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Omni Hospitals [cite: 11]",
          "date_from": "10-05-2019 [cite: 11]",
          "date_to": "09-06-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Pelcoat Formulations [cite: 11]",
          "date_from": "10-05-2019 [cite: 11]",
          "date_to": "09-06-2019 [cite: 11]",
          "no_of_students": 2
        },
        {
          "company_name": "Primary Health Care Center [cite: 11]",
          "date_from": "10-05-2019 [cite: 11]",
          "date_to": "09-06-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Ramesh Hospitals [cite: 11]",
          "date_from": "10-05-2019 [cite: 11]",
          "date_to": "09-06-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Ramesh Hospitals [cite: 11]",
          "date_from": "13-05-2019 [cite: 11]",
          "date_to": "13-06-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "RVR Labs Pvt. Ltd [cite: 11]",
          "date_from": "10-05-2019 [cite: 11]",
          "date_to": "10-06-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Sravani Hospital [cite: 11]",
          "date_from": "09-05-2019 [cite: 11]",
          "date_to": "06-06-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Sri Sai Sudha Multi-Speciality Hospital [cite: 11]",
          "date_from": "10-05-2019 [cite: 11]",
          "date_to": "09-06-2019 [cite: 11]",
          "no_of_students": 1
        },
        {
          "company_name": "Star Tech Labs Pvt. Ltd [cite: 11]",
          "date_from": "10-05-2019 [cite: 11]",
          "date_to": "09-06-2019 [cite: 11]",
          "no_of_students": 12
        },
        {
          "company_name": "Yontus Life Sciences Pvt. Ltd [cite: 11]",
          "date_from": "09-05-2019 [cite: 11]",
          "date_to": "06-06-2019 [cite: 11]",
          "no_of_students": 2
        },
        {
          "company_name": "Yontus Life Sciences Pvt. Ltd [cite: 11]",
          "date_from": "09-05-2019 [cite: 11]",
          "date_to": "08-06-2019 [cite: 11]",
          "no_of_students": 4
        }
      ],
      "total_students": 91
    },
    {
      "academic_year": "2018-2019 [cite: 12]",
      "batch": "2015-2019 [cite: 12]",
      "records": [
        {
          "company_name": "MSN LABORATORIES [cite: 13]",
          "date_from": "06-05-2019 [cite: 13]",
          "date_to": "19-07-2019 [cite: 13]",
          "no_of_students": 5
        },
        {
          "company_name": "Granules India Pvt. Ltd [cite: 13]",
          "date_from": "06-05-2019 [cite: 13]",
          "date_to": "03-06-2019 [cite: 13]",
          "no_of_students": 1
        },
        {
          "company_name": "Darwin Research And Ayur Pharma [cite: 13]",
          "date_from": "01-05-2019 [cite: 13]",
          "date_to": "31-05-2019 [cite: 13]",
          "no_of_students": 5
        },
        {
          "company_name": "Darwin Formulations Pvt. Ltd [cite: 13]",
          "date_from": "01-05-2019 [cite: 13]",
          "date_to": "31-05-2019 [cite: 13]",
          "no_of_students": 48
        },
        {
          "company_name": "Darwin Formulations Pvt. Ltd [cite: 13]",
          "date_from": "01-06-2019 [cite: 13]",
          "date_to": "31-06-2019 [cite: 13]",
          "no_of_students": 11
        },
        {
          "company_name": "Chalapathi Drug Testing Laboratory [cite: 13]",
          "date_from": "06-05-2019 [cite: 13]",
          "date_to": "04-06-2019 [cite: 13]",
          "no_of_students": 6
        },
        {
          "company_name": "Chalapathi Drug Testing Laboratory [cite: 13]",
          "date_from": "06-05-2019 [cite: 13]",
          "date_to": "06-06-2019 [cite: 13]",
          "no_of_students": 6
        },
        {
          "company_name": "Chalapathi Drug Testing Laboratory [cite: 13]",
          "date_from": "06-05-2019 [cite: 13]",
          "date_to": "19-07-2019 [cite: 13]",
          "no_of_students": 1
        },
        {
          "company_name": "Aurobindo Pharma [cite: 13]",
          "date_from": "14-05-2019 [cite: 13]",
          "date_to": "13-06-2019 [cite: 13]",
          "no_of_students": 4
        },
        {
          "company_name": "APT Labs [cite: 13]",
          "date_from": "01-05-2019 [cite: 13]",
          "date_to": "31-05-2019 [cite: 13]",
          "no_of_students": 1
        },
        {
          "company_name": "ANI Generics [cite: 13]",
          "date_from": "01-05-2019 [cite: 13]",
          "date_to": "31-05-2019 [cite: 13]",
          "no_of_students": 1
        },
        {
          "company_name": "Alapati Pharma [cite: 13]",
          "date_from": "01-05-2019 [cite: 13]",
          "date_to": "31-05-2019 [cite: 13]",
          "no_of_students": 3
        }
      ],
      "total_students": 92
    },
    {
      "academic_year": "2017-2018 [cite: 14]",
      "batch": "2014-2018 [cite: 14]",
      "records": [
        {
          "company_name": "Darwin Formulations Pvt. Ltd [cite: 15]",
          "date_from": "01-05-2018 [cite: 15]",
          "date_to": "31-05-2018 [cite: 15]",
          "no_of_students": 38
        },
        {
          "company_name": "Darwin Research & Ayur Pharma [cite: 15]",
          "date_from": "01-05-2018 [cite: 15]",
          "date_to": "31-05-2018 [cite: 15]",
          "no_of_students": 36
        },
        {
          "company_name": "Alapati Pharma [cite: 15]",
          "date_from": "10-05-2018 [cite: 15]",
          "date_to": "02-06-2018 [cite: 15]",
          "no_of_students": 1
        },
        {
          "company_name": "Alapati Pharma [cite: 15]",
          "date_from": "15-05-2018 [cite: 15]",
          "date_to": "15-06-2018 [cite: 15]",
          "no_of_students": 1
        },
        {
          "company_name": "Safe Formulations Ltd [cite: 15]",
          "date_from": "01-05-2018 [cite: 15]",
          "date_to": "31-05-2018 [cite: 15]",
          "no_of_students": 1
        },
        {
          "company_name": "Primary Health Care Center [cite: 15]",
          "date_from": "01-05-2018 [cite: 15]",
          "date_to": "31-05-2018 [cite: 15]",
          "no_of_students": 2
        },
        {
          "company_name": "Karthikeya Drugs and Pharmaceutical Pvt. Ltd [cite: 15]",
          "date_from": "10-05-2018 [cite: 15]",
          "date_to": "11-06-2018 [cite: 15]",
          "no_of_students": 1
        },
        {
          "company_name": "Biophore India Pharmaceuticals Pvt. Ltd [cite: 15]",
          "date_from": "01-05-2018 [cite: 15]",
          "date_to": "31-05-2018 [cite: 15]",
          "no_of_students": 1
        },
        {
          "company_name": "Nectar Laboratories Pvt. Ltd [cite: 15]",
          "date_from": "01-05-2018 [cite: 15]",
          "date_to": "31-05-2018 [cite: 15]",
          "no_of_students": 1
        }
      ],
      "total_students": 82
    },
    {
      "academic_year": "2016-2017 [cite: 16]",
      "batch": "2013-2017 [cite: 16]",
      "records": [
        {
          "company_name": "Darwin Formulations Pvt. Ltd [cite: 17]",
          "date_from": "25-05-2017 [cite: 17]",
          "date_to": "24-06-2017 [cite: 17]",
          "no_of_students": 29
        },
        {
          "company_name": "Darwin Formulations Pvt. Ltd [cite: 17]",
          "date_from": "19-05-2017 [cite: 17]",
          "date_to": "18-06-2017 [cite: 17]",
          "no_of_students": 3
        },
        {
          "company_name": "Darwin Research & Ayur Pharma [cite: 17]",
          "date_from": "25-05-2017 [cite: 17]",
          "date_to": "24-06-2017 [cite: 17]",
          "no_of_students": 23
        },
        {
          "company_name": "Darwin Research & Ayur Pharma [cite: 17]",
          "date_from": "21-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Kreative Organics Pvt. Ltd [cite: 17]",
          "date_from": "21-05-2017 [cite: 17]",
          "date_to": "20-06-2017 [cite: 17]",
          "no_of_students": 3
        },
        {
          "company_name": "Aurobindo Pharma Ltd [cite: 17]",
          "date_from": "22-05-2017 [cite: 17]",
          "date_to": "21-06-2017 [cite: 17]",
          "no_of_students": 2
        },
        {
          "company_name": "Zeno-tech Laboratories Pvt. Ltd [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Srinija Parenterals [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 5
        },
        {
          "company_name": "Granules India Pvt. Ltd [cite: 17]",
          "date_from": "05-06-2017 [cite: 17]",
          "date_to": "06-07-2017 [cite: 17]",
          "no_of_students": 2
        },
        {
          "company_name": "Chemi Labs [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "THERDOSE Pharma Pvt. Ltd [cite: 17]",
          "date_from": "02-05-2017 [cite: 17]",
          "date_to": "31-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Natco Pharma Ltd [cite: 17]",
          "date_from": "07-06-2017 [cite: 17]",
          "date_to": "06-07-2017 [cite: 17]",
          "no_of_students": 4
        },
        {
          "company_name": "MSN Laboratories Pvt. Ltd [cite: 17]",
          "date_from": "25-05-2017 [cite: 17]",
          "date_to": "24-06-2017 [cite: 17]",
          "no_of_students": 2
        },
        {
          "company_name": "Hippo Labs Pvt. Ltd [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Seeko Biotics [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "International Health care Ltd [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Primary Health care center [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Serin Formulations [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Alapati Pharma [cite: 17]",
          "date_from": "22-04-2017 [cite: 17]",
          "date_to": "26-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Koch Organics [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 2
        },
        {
          "company_name": "SP Accure Labs Pvt. Ltd [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Aamrex Formulations [cite: 17]",
          "date_from": "22-04-2017 [cite: 17]",
          "date_to": "25-05-2017 [cite: 17]",
          "no_of_students": 2
        },
        {
          "company_name": "Celon Labs Pvt. Ltd [cite: 17]",
          "date_from": "01-06-2017 [cite: 17]",
          "date_to": "30-06-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Gland Pharma Ltd [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Vital Therapeutics And Formulations Pvt. Ltd [cite: 17]",
          "date_from": "20-04-2017 [cite: 17]",
          "date_to": "24-05-2017 [cite: 17]",
          "no_of_students": 2
        },
        {
          "company_name": "Mylan Laboratories Ltd [cite: 17]",
          "date_from": "12-05-2017 [cite: 17]",
          "date_to": "11-06-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Kreative Organics Pvt. Ltd [cite: 17]",
          "date_from": "20-05-2017 [cite: 17]",
          "date_to": "19-06-2017 [cite: 17]",
          "no_of_students": 1
        },
        {
          "company_name": "Kreative Organics Pvt. Ltd [cite: 17]",
          "date_from": "24-05-2017 [cite: 17]",
          "date_to": "26-06-2017 [cite: 17]",
          "no_of_students": 1
        }
      ],
      "total_students": 95
    },
    {
      "academic_year": "2015-2016 [cite: 18]",
      "batch": "2012-2016 [cite: 18]",
      "records": [
        {
          "company_name": "Darwin formulations pvt. Ltd. [cite: 19]",
          "date_from": "05-05-2016 [cite: 19]",
          "date_to": "10-06-2016 [cite: 19]",
          "no_of_students": 9
        },
        {
          "company_name": "Darwin formulations pvt. Ltd. [cite: 19]",
          "date_from": "11-05-2016 [cite: 19]",
          "date_to": "11-06-2016 [cite: 19]",
          "no_of_students": 3
        },
        {
          "company_name": "Darwin formulations pvt. Ltd. [cite: 19]",
          "date_from": "06-06-2016 [cite: 19]",
          "date_to": "05-07-2016 [cite: 19]",
          "no_of_students": 10
        },
        {
          "company_name": "Darwin formulations pvt. Ltd. [cite: 19]",
          "date_from": "09-07-2016 [cite: 19]",
          "date_to": "10-08-2016 [cite: 19]",
          "no_of_students": 1
        },
        {
          "company_name": "Darwin formulations pvt. Ltd. [cite: 19]",
          "date_from": "04-05-2016 [cite: 19]",
          "date_to": "05-07-2016 [cite: 19]",
          "no_of_students": 1
        },
        {
          "company_name": "Darwin formulations pvt. Ltd. [cite: 19]",
          "date_from": "10-06-2016 [cite: 19]",
          "date_to": "10-07-2016 [cite: 19]",
          "no_of_students": 1
        },
        {
          "company_name": "VBS Pharma [cite: 19]",
          "date_from": "10-05-2016 [cite: 19]",
          "date_to": "09-06-2016 [cite: 19]",
          "no_of_students": 2
        },
        {
          "company_name": "Analog labs [cite: 19]",
          "date_from": "10-05-2016 [cite: 19]",
          "date_to": "25-06-2016 [cite: 19]",
          "no_of_students": 3
        },
        {
          "company_name": "Chemic life Sciences pvt ltd [cite: 19]",
          "date_from": "05-05-2016 [cite: 19]",
          "date_to": "10-06-2016 [cite: 19]",
          "no_of_students": 1
        },
        {
          "company_name": "Aurobindo Pharma Ltd [cite: 19]",
          "date_from": "10-05-2016 [cite: 19]",
          "date_to": "09-06-2016 [cite: 19]",
          "no_of_students": 5
        },
        {
          "company_name": "Pelcoat formulations [cite: 19]",
          "date_from": "10-05-2016 [cite: 19]",
          "date_to": "10-06-2016 [cite: 19]",
          "no_of_students": 3
        },
        {
          "company_name": "Life line formulations [cite: 19]",
          "date_from": "05-05-2016 [cite: 19]",
          "date_to": "10-06-2016 [cite: 19]",
          "no_of_students": 2
        },
        {
          "company_name": "Pfizer [cite: 19]",
          "date_from": "11-05-2016 [cite: 19]",
          "date_to": "14-06-2016 [cite: 19]",
          "no_of_students": 2
        },
        {
          "company_name": "Koch organics pvt ltd [cite: 19]",
          "date_from": "05-05-2016 [cite: 19]",
          "date_to": "10-06-2016 [cite: 19]",
          "no_of_students": 1
        },
        {
          "company_name": "Alphamed Formulation pvt ltd [cite: 19]",
          "date_from": "05-05-2016 [cite: 19]",
          "date_to": "10-06-2016 [cite: 19]",
          "no_of_students": 1
        },
        {
          "company_name": "Appcure labs [cite: 19]",
          "date_from": "09-05-2016 [cite: 19]",
          "date_to": "09-06-2016 [cite: 19]",
          "no_of_students": 1
        },
        {
          "company_name": "Verdant life sciences pvt ltd [cite: 19]",
          "date_from": "06-05-2016 [cite: 19]",
          "date_to": "07-06-2016 [cite: 19]",
          "no_of_students": 1
        },
        {
          "company_name": "Natco Pharma Limited [cite: 19]",
          "date_from": "05-05-2016 [cite: 19]",
          "date_to": "06-06-2016 [cite: 19]",
          "no_of_students": 7
        },
        {
          "company_name": "Everest Formulations [cite: 19]",
          "date_from": "05-05-2016 [cite: 19]",
          "date_to": "04-06-2016 [cite: 19]",
          "no_of_students": 1
        },
        {
          "company_name": "Nifty Labs Pvt ltd [cite: 19]",
          "date_from": "05-05-2016 [cite: 19]",
          "date_to": "10-06-2016 [cite: 19]",
          "no_of_students": 1
        },
        {
          "company_name": "Nakoda Chemicals Ltd [cite: 19]",
          "date_from": "05-05-2016 [cite: 19]",
          "date_to": "06-06-2016 [cite: 19]",
          "no_of_students": 1
        },
        {
          "company_name": "Vimta labs ltd [cite: 19]",
          "date_from": "12-05-2016 [cite: 19]",
          "date_to": "11-06-2016 [cite: 19]",
          "no_of_students": 1
        }
      ],
      "total_students": 58
    }
  ]
};

async function seedData() {
  console.log('Seeding IIPEC Training Records...');

  for (const yearRecord of rawData.industrial_training) {
    // Clean citation markers from strings
    const cleanAcademicYear = yearRecord.academic_year.replace(/\s*\[cite:\s*\d+\]\s*/g, '');
    const cleanBatch = yearRecord.batch.replace(/\s*\[cite:\s*\d+\]\s*/g, '');
    
    const records = yearRecord.records.map(r => ({
      _key: Math.random().toString(36).substring(7),
      companyName: r.company_name.replace(/\s*\[cite:\s*\d+\]\s*/g, '').trim(),
      dateFrom: r.date_from.replace(/\s*\[cite:\s*\d+\]\s*/g, '').trim(),
      dateTo: r.date_to.replace(/\s*\[cite:\s*\d+\]\s*/g, '').trim(),
      noOfStudents: r.no_of_students
    }));

    const doc = {
      _type: 'iipecTraining',
      academicYear: cleanAcademicYear,
      batch: cleanBatch,
      totalStudents: yearRecord.total_students,
      records: records
    };

    try {
      const result = await client.create(doc);
      console.log(`Created document for ${cleanAcademicYear} - ID: ${result._id}`);
    } catch (err) {
      console.error(`Failed to create document for ${cleanAcademicYear}`, err);
    }
  }

  console.log('Finished seeding IIPEC data.');
}

seedData();
