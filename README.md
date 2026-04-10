# Metric/Imperial Unit Converter

A sleek, dark-mode web application for quick and easy conversion between metric and imperial units. Simply enter a number and instantly get bidirectional conversions for length, volume, and mass.

## What It Does

This unit converter allows users to convert between three essential measurement categories:

- **Length**: Meters ↔ Feet (1 meter = 3.281 feet)
- **Volume**: Liters ↔ Gallons (1 liter = 0.264 gallons)
- **Mass**: Kilograms ↔ Pounds (1 kilogram = 2.204 pounds)

All conversion results are rounded to 3 decimal places for accuracy and readability. The app provides bidirectional conversions, so you can convert from metric to imperial or vice versa with a single input.

## Use Cases

- **Cooking & Baking**: Convert recipe measurements between metric and imperial units
- **DIY & Construction**: Quickly convert measurements for home improvement projects
- **Travel**: Convert distances, volumes, and weights while traveling internationally
- **Engineering & Science**: Fast reference tool for unit conversions in calculations
- **Education**: Learning tool for students studying metric and imperial systems
- **Fitness**: Convert weight and volume measurements for fitness and nutrition tracking
- **International Business**: Facilitate transactions and communications across different measurement systems

## Color Scheme & Design Philosophy

The application uses a carefully chosen dark mode color palette designed for clarity, reduced eye strain, and modern aesthetics:

### Color Breakdown

| Element | Color | Purpose |
|---------|-------|---------|
| **Header Background** | Purple Gradient (#7c3aed to #6d28d9) | Eye-catching header that draws attention to the conversion interface |
| **Input Field** | Transparent with white border | Clean, modern look that stands out against the purple background |
| **Input Text** | White (#ffffff) | High contrast for easy readability |
| **Results Background** | Dark Charcoal (#2d3748) | Reduces eye fatigue during extended use |
| **Results Container** | Darker Gray (#1a202c) | Creates visual hierarchy and separation |
| **Result Text** | Light Gray (#e0e7ff, #cbd5e1) | Excellent contrast for comfortable reading on dark background |
| **Borders & Accents** | Semi-transparent white/purple | Subtle visual guidance without overwhelming the interface |
| **Button** | White text on purple | Clear call-to-action that encourages interaction |

### Design Reasoning

**Why Dark Mode?**
- **Reduces Eye Strain**: Dark backgrounds minimize blue light exposure, making the app comfortable to use for extended periods
- **Modern Aesthetic**: Dark mode has become the standard for contemporary web applications
- **Battery Efficiency**: On OLED devices, dark backgrounds consume less power
- **Professional Appearance**: Conveys a polished, professional tool

**Color Choices Explained:**
- **Purple Header**: Visually distinct from the darker results section, creating clear separation between input and output
- **Transparent Input Field**: Maintains visual connection to the purple header while allowing the gradient to show through
- **Charcoal Results Section**: Neutral background that doesn't compete with the content while remaining easy on the eyes
- **High Contrast Text**: White and light gray text ensure legibility without harsh brightness

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Enter a number in the input field (default is 20)
4. Click the "Convert" button or press Enter
5. View the bidirectional conversions for all three categories

## Files

- `index.html` - Main HTML structure
- `styles.css` - Dark mode styling and responsive design
- `script.js` - Conversion logic and interactivity

## Technologies Used

- HTML5
- CSS3 (with Flexbox for responsive layout)
- Vanilla JavaScript (no dependencies)

## Features

- Real-time bidirectional conversions
- Precise rounding to 3 decimal places
- Fully responsive design (mobile, tablet, desktop)
- Keyboard support (Enter key to convert)
- Pre-loaded default value (20)
- Dark mode UI optimized for comfort
- Fast, lightweight, and dependency-free  

## Conversion Formulas

```
Length:  1 meter = 3.281 feet
Volume:  1 liter = 0.264 gallons
Mass:    1 kilogram = 2.204 pounds
```

All conversions are calculated bidirectionally, allowing users to convert in either direction.

## Customization

You can easily customize the converter by:
- Modifying the conversion rates in `script.js` (CONVERSION_RATES object)
- Changing the color scheme in `styles.css`
- Adding additional unit types by expanding the conversion logic in `script.js`


