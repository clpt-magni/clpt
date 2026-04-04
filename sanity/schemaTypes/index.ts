import faculty from './faculty';
import notice from './notice';
import gallery from './gallery';
import news from './news';
import event from './event';
import library from './library';
import program from './program';
import academicCalendar from './academicCalendar';
import { laboratory } from './laboratory';
import { 
  nssUnit1Activity, nssUnit2Activity, ipaLamActivity, isporAmaravatiActivity, isporAnuActivity
} from './activityTypes';
import { iipecTraining } from './iipecTraining';
import mou from './mou';
import publication from './publication';
import { placementStats, placementCompany } from './placement';
import skillPartner from './skillPartner';
import studentList from './studentList';
import feeStructure from './feeStructure';

export const schemaTypes = [
  faculty, 
  notice, 
  gallery, 
  news, 
  event, 
  library, 
  program,
  academicCalendar,
  laboratory,
  nssUnit1Activity,
  nssUnit2Activity,
  ipaLamActivity,
  isporAmaravatiActivity,
  isporAnuActivity,
  iipecTraining,
  mou,
  publication,
  placementStats,
  placementCompany,
  skillPartner,
  studentList,
  feeStructure
];
