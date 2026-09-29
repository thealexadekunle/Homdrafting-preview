# Hōm Homepage

A complete local homepage built with Next.js, React, TypeScript, and CSS. Fonts and images are served locally.

## Run

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3017.

For a production preview:

```sh
npm run build
npm run start
```

## Editing

The page is in `app/page.tsx`. Services, questions, and image paths are in `app/content.ts`. Interactive navigation, accordions, and the enquiry form are in `app/components.tsx`. Styling is in `app/globals.css`.

## Enquiry delivery

The form deliberately does not transmit its field values. The preview displays an honest unavailable response locally without a server request. Input remains available after submitting. No message has been sent to the business. Before launch, connect an authorised delivery provider, implement server validation and abuse protection, and supply the business approved privacy information. No environment variables or secrets are required for this preview.

## Images and fonts

The two residential renderings come from Hōm’s existing public website and are labelled as concepts, not completed projects. Confirm publication rights before launch. The second image retains an internal filename containing `interior`, but it depicts an exterior and has accurate alternative text.

Hero source: https://static.wixstatic.com/media/995ae4_e17dbedc12df4d45b9c03e7f4410be6a~mv2_d_4000_2588_s_4_2.jpg

Second rendering: https://static.wixstatic.com/media/995ae4_22933a80834c49f5b8b0b31e5f8d9a3d~mv2_d_4000_2252_s_2.jpg

Manrope is installed through Fontsource. The supplied Hōm logo is used unchanged in the header and footer. The palette is white #FFFFFF, navy #0D1926, and cyan #01ABC1. The floor plan illustration is decorative original artwork and is not a construction drawing. Material circles are CSS illustrations.

## Before launch

Confirm the experience figure, address, image rights, final brand mark, enquiry destination, and privacy copy. The preview is marked noindex. Set production metadata, canonical URL, and an approved social sharing image when the destination is confirmed. 

## GitHub Pages preview

Preview URL: https://thealexadekunle.github.io/Homdrafting-preview/

GitHub Pages publishes the committed `docs` directory from `main`. To update the preview, build the export, replace `docs` with the contents of `out`, retain `docs/.nojekyll`, then commit and push.

```sh
HOM_STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/Homdrafting-preview npm run build
```

Search indexing remains disabled for this preview. The enquiry form requires a separate delivery service before it can receive messages.
