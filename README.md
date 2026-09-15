# Pictail

Picture-first listings. Details live on the photo.

Hover a pin on desktop or tap it on a phone. A short popup appears. The image stays in view instead of being pushed off-screen by a long description.

## Why

Sale listings lose the photo the moment a wall of text starts. Real estate and auto sales are the worst cases: kitchens, lots, options, wear, and upgrades get buried under paragraphs. Pictail keeps the picture in the frame and pins the facts to the granite, the island, the mileage, the leather.

## Prototypes

Open the HTML files in a browser. No build step.

| File | What it is |
| --- | --- |
| [pictail-prototype.html](pictail-prototype.html) | Buyer view. Sample house, kitchen, and car listings with hover/tap pins. |
| [pictail-seller-mock.html](pictail-seller-mock.html) | Seller flow. Upload or pick a photo, click to drop a pin, add a short fact, save. Switch to buyer preview. Pins persist in `localStorage`. |

## Seller loop

1. Upload the picture.
2. Tap a spot. Type a short fact.
3. Save it to that point on the image.
4. Buyer hovers or taps. Popup stays on the photo.

Coordinates are stored as fractions of the image (`x`, `y` in `0–1`) so pins survive resize.

## Not the camera-filter app

An existing iOS/Android app named Pictail is a cocktail-themed photo filter product. This repo is a listing-layer concept and is not affiliated with that app.

## License

Prototypes in this repo are provided as-is for exploration.
