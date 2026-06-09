import { defineType, defineField } from 'sanity';

const sharedFields = [
  defineField({
    name: 'title',
    title: 'Chapter Name',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'title',
      maxLength: 96,
    },
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'logo',
    title: 'Chapter Logo',
    type: 'image',
    options: { hotspot: true },
  }),
  defineField({
    name: 'description',
    title: 'Description',
    type: 'text',
  }),
  defineField({
    name: 'documents',
    title: 'Associated Documents',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Document Label', type: 'string' }),
          defineField({ name: 'file', title: 'PDF File', type: 'file' }),
        ],
      },
    ],
  }),
];

export const nssUnit1 = defineType({
  name: 'nssUnit1',
  title: 'NSS UNIT - I',
  type: 'document',
  fields: sharedFields,
});

export const nssUnit2 = defineType({
  name: 'nssUnit2',
  title: 'NSS UNIT - II',
  type: 'document',
  fields: sharedFields,
});

export const ipaLam = defineType({
  name: 'ipaLam',
  title: 'IPA - LAM LOCAL BRANCH',
  type: 'document',
  fields: sharedFields,
});

export const isporAmaravati = defineType({
  name: 'isporAmaravati',
  title: 'ISPOR INDIA - AMARAVATI REGIONAL CHAPTER',
  type: 'document',
  fields: sharedFields,
});

export const isporAnu = defineType({
  name: 'isporAnu',
  title: 'ISPOR ANU STUDENT CHAPTER',
  type: 'document',
  fields: sharedFields,
});

// CHAPTER-SPECIFIC ACTIVITY TYPES (V3)
const activityFields = [
  defineField({
    name: 'title',
    title: 'Activity Title',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'title',
      maxLength: 96,
    },
    validation: (Rule) => Rule.required(),
  }),
  defineField({ name: 'date', title: 'Date', type: 'string' }),
  defineField({ name: 'place', title: 'Place', type: 'string' }),
  defineField({ name: 'participants', title: 'Faculty & Students', type: 'string' }),
  defineField({ name: 'beneficiaries', title: 'Beneficiaries', type: 'string' }),
  defineField({
    name: 'description',
    title: 'Detailed Report / Description',
    type: 'array',
    of: [{ type: 'block' }],
  }),
  defineField({
    name: 'gallery',
    title: 'Event Gallery',
    type: 'array',
    of: [{ type: 'image', options: { hotspot: true } }],
  }),
  defineField({
    name: 'documents',
    title: 'Event Documents',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'file', title: 'File', type: 'file' }),
        ],
      },
    ],
  }),
];

export const nssUnit1Activity = defineType({
  name: 'nssUnit1Activity',
  title: 'NSS UNIT-I ACTIVITY',
  type: 'document',
  fields: activityFields,
});

export const nssUnit2Activity = defineType({
  name: 'nssUnit2Activity',
  title: 'NSS UNIT-II ACTIVITY',
  type: 'document',
  fields: activityFields,
});

export const ipaLamActivity = defineType({
  name: 'ipaLamActivity',
  title: 'IPA LAM ACTIVITY',
  type: 'document',
  fields: activityFields,
});

export const isporAmaravatiActivity = defineType({
  name: 'isporAmaravatiActivity',
  title: 'ISPOR AMARAVATI ACTIVITY',
  type: 'document',
  fields: activityFields,
});

export const isporAnuActivity = defineType({
  name: 'isporAnuActivity',
  title: 'ISPOR ANU ACTIVITY',
  type: 'document',
  fields: activityFields,
});
