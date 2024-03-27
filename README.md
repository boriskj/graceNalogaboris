# 1. Light switch

### Kratek opis

Naredil boš komponento `<LightSwitch>`, ki bo preklapljala med light/dark mode tvoje spletne strani.

### Naloga

1. Naloži `<Switch />` komponento iz [ui.shadcn.com](https://ui.shadcn.com/docs/components/switch)
2. Odpri datoteko `src/components/LightSwitch.jsx`
3. Z Reactovim `useState` naredi nov state `isDark`, ki bo imel vrednost `true` ali `false`. Na začetku naj bo `false`, torej naj bo svetla tema.
4. Prikaži `<Switch />` komponento v `<LightSwitch />` komponenti in ji nastavi vrednost glede na `mode`.
   - `<Switch />` ima atributa `checked` in `onCheckedChange`. Prvi je boolean, ki določa, če je stikalo vklopljeno, drugi pa je funkcija, ki se pokliče, ko se stikalo preklopi. Te to spominja na `useState`?
   - Da bomo lahko spremljali vrednost stikala, moramo povezati svoj state `isDark` s stikalom. To naredimo tako, da `checked` nastavimo na `isDark` in `onCheckedChange` na `setIsDark`.
5. Uporabi `useEffect`, da boš ob spremembi `isDark` `<html>` znački dodal class `light` ali `dark`

```js
// To kodo daj v useEffect
const root = document.documentElement; // najde <html> značko
root.classList.remove("light", "dark"); // odstrani prejšnji class
root.classList.add(isDark ? "dark" : "light"); // dodaj nov class glede na vrednost isDark
```

# 2. Text Length Counter

### Kratek opis

Naredil boš komponento `<TextLengthCounter>`, ki bo štela število znakov v vnosnem polju in ti povedala, če imaš preveč znakov.

### Naloga

1. Odpri datoteko `src/components/TextLengthCounter.jsx`
2. Naredi nov state `text` s privzeto vrednostjo `""`
3. Naredi nov state `maxChars` s privzeto vrednostjo `100`
4. Naredi nov state `isOverLimit` s privzeto vrednostjo `false`
5. Za vnost besedila uporabi [TextArea](https://ui.shadcn.com/docs/components/textarea).
   - Kot pri LightSwitch, moraš povezati besedilo v TextArea s statom `text`
6. Za spreminjanje `maxChars` uporabi [Slider](https://ui.shadcn.com/docs/components/slider)
7. Ko bo dolžina teksta (`text.length`) večja od `maxChars`, naj se prikaže tekst, ki te opozori, da imaš predolg tekst.
