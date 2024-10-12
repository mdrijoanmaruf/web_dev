# Tailwind CSS

## Font 

#### Classes :
* **Font Families**: `font-sans`, `font-serif`, `font-mono`
* **Font Sizes**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`, `text-8xl`, `text-9xl`
* **Font Weights**: `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`

#### Example : 
```html
<p class="font-sans text-2xl font-bold">Tailwind Fonts Example</p>
 <!-- Bold 2xl Sans-serif Text -->
```




## Colors 

#### Classes :
* **Text Colors**: `text-{color}`, `text-gray-700`, `text-red-500`, `text-blue-600`, `text-green-800`
* **Background Colors**: `bg-{color}`, `bg-gray-200`, `bg-yellow-300`, `bg-red-200`, `bg-blue-400`
* **Border Colors**: `border-{color}`, `border-gray-500`, `border-indigo-600`, `border-green-300`

#### Example : 
```html
<p class="text-red-500 bg-yellow-200 border border-blue-400">Colored Text with Background and Border</p> 
<!-- Red text on yellow background with blue border -->
```




## Border

#### Classes :
* **Border Width**: `border`, `border-0`, `border-2`, `border-4`, `border-8`
* **Border Radius**: `rounded`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-full`
* **Border Styles**: `border-solid`, `border-dashed`, `border-dotted`

#### Example : 
```html
<div class="border-4 border-blue-500 rounded-lg border-dashed">Dashed Border Example</div>
 <!-- Dashed blue border with rounded corners -->
```




## Box (Padding, Margin, Width, Height)

#### Classes :
* **Padding**: `p-{value}`, `px-{value}`, `py-{value}`, `pt-{value}`, `pr-{value}`, `pb-{value}`, `pl-{value}`
* **Margin**: `m-{value}`, `mx-{value}`, `my-{value}`, `mt-{value}`, `mr-{value}`, `mb-{value}`, `ml-{value}`
* **Width**: `w-{value}`, `w-1/2`, `w-full`, `w-screen`, `w-3/4`
* **Height**: `h-{value}`,` h-16`, `h-full`, `h-screen`

#### Example : 
```html
<div class="p-4 m-2 w-1/2 h-32 bg-gray-200">Box with Padding and Margin</div> 
<!-- Box with padding and margin, 50% width, and fixed height -->
```




## Display Property 

#### Classes :
* **Display Types**: `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `hidden`
* **Flex Direction**: `flex-row`, `flex-col`, `flex-row-reverse`, `flex-col-reverse`
* **Justify Content**: `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`

#### Example : 
```html
<div class="flex justify-between"> 
    <!-- Flex container with space between items -->
  <div class="block">Block Element</div>
  <span class="inline-block">Inline Block Element</span>
</div>
```




## Position Property

#### Classes :
* **Position Types**: `static`, `relative`, `absolute`, `fixed`, `sticky`
* **Position Values**: `top-{value}`, `right-{value}`, `bottom-{value}`, `left-{value}`

#### Example : 
```html
<div class="relative top-4 left-2 bg-gray-300">
     <!-- Relative position with offset -->
  Relative Positioned Box
</div>
```




## Units

#### Classes :
* **Width and Height**: `w-{value}`, `h-{value}`, `w-full`, `h-full`, `w-1/3`, `h-screen`
* **Responsive Units**: `max-w-{value}`, `min-w-{value}`, `max-h-{value}`, `min-h-{value}`

#### Example : 
```html
<div class="w-1/2 h-screen bg-gray-300">
     <!-- 50% Width and Full Height -->
  Full Height Box
</div>
```




## FlexBox

#### Classes :
* **Flex Properties**: `flex`, `flex-row`, `flex-col`, `flex-wrap`, `flex-nowrap`
* **Justify and Align**: `justify-start`, `justify-center`, `items-start`, `items-center`, `gap-{value}`

#### Example : 
```html
<div class="flex justify-center items-center gap-4">
     <!-- Centered flex items with gap -->
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-red-500"></div>
</div>
```




## Media Query (Responsive)

#### Classes :
* **Breakpoints**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
* **Responsive Text Sizes**: `text-sm`, `sm:text-lg`, `md:text-xl`

#### Example : 
```html
<p class="text-sm sm:text-lg md:text-xl">Responsive Text Size Example</p> 
<!-- Text size adjusts based on screen size -->
```




## Box-Shadow

#### Classes :
* **Shadow Sizes**: `shadow`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-none`
* **Shadow Color**: Custom utility for colored shadows

#### Example : 
```html
<div class="shadow-lg p-4 bg-white"> <!-- Box with Large Shadow -->
  Box with Large Shadow
</div>
```




## Pseudo-classes

#### Classes :
* **States**: `hover:`, `focus:`, `active:`, `disabled:`
* **Example State**: `hover:bg-blue-500`, `focus:border-red-500`, `active:bg-green-500`

#### Example : 
```html
<button class="hover:bg-green-500 focus:border-blue-500 p-2">
  Hover and Focus Example
</button> 
<!-- Button changes color on hover and focus -->
```


## Grid 
#### Classes :
* **Grid Container**: `grid`, `grid-cols-{n}`, `grid-rows-{n}`, `gap-{value}`
* **Grid Item Alignment**: `col-span-{n}`, `row-span-{n}`, `justify-items-center`, `items-center`

```html
<div class="grid grid-cols-3 gap-4"> 
    <!-- Grid with 3 columns and gap -->
  <div class="bg-red-500">1</div>
  <div class="bg-blue-500">2</div>
  <div class="bg-green-500">3</div>
</div>
```



## Animation
#### Classes :
* `animate-spin`: Rotates an element continuously.
* `animate-ping`: Creates a pulsing effect, like a heartbeat.
* `animate-pulse`: Fades an element in and out.
* `animate-bounce`: Moves an element up and down.
* Custom animations can be created using the `@keyframes` rule in CSS.

```html
<div class="animate-spin w-16 h-16 bg-blue-500">
    <!-- A spinning blue box -->
</div>
```



## Transition
#### Classes :
* `transition`: Enables transitions on all properties.
* `transition-all`: Transitions all properties.
* `transition-colors`: Transitions color properties.
* `transition-opacity`: Transitions the opacity.
* `transition-transform`: Transitions transformations (scaling, rotating).
* `duration-{time}`: Sets the duration of the transition (e.g., * duration-200, duration-500).
* `ease-{type}`: Sets the timing function (e.g., ease-linear, ease-in, ease-out, ease-in-out).

```html
<button class="bg-blue-500 text-white p-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
  Hover Me
</button> 
<!-- Button scales up when hovered -->
```



## 2D Transform
#### Classes :
* `transform`: Enables transform properties.
* `translate-x-{value}`: Moves an element along the x-axis (e.g., `translate-x-2`, `-translate-x-1`).
* `translate-y-{value}`: Moves an element along the y-axis (e.g., `translate-y-2`, `-translate-y-1`).
* `scale-{value}`: Scales an element (e.g., `scale-50`, `scale-110`).
* `rotate-{value}`: Rotates an element (e.g., `rotate-45`, `-rotate-90`).
* `skew-x-{value}`: Skews an element along the x-axis (e.g., `skew-x-12`).
* `skew-y-{value}`: Skews an element along the y-axis (e.g., `skew-y-12`)

```html
<div class="transform translate-x-4 scale-75 rotate-45 bg-green-500 w-16 h-16"> 
    <!-- Translated, scaled down, and rotated green box -->
</div>
```


## 3D Transform
#### Classes :
* `transform`: Enables transform properties.
* `perspective-{value}`: Applies perspective to child elements (e.g., `perspective-100`, `perspective-500`).
* `rotate-x-{value}`: Rotates an element around the x-axis (e.g., `rotate-x-45`).
* `rotate-y-{value}`: Rotates an element around the y-axis (e.g., `rotate-y-45`).
* `rotate-z-{value}`: Rotates an element around the z-axis (e.g., `rotate-z-45`).
* `translate-z-{value}`: Moves an element along the z-axis (e.g., `translate-z-2`, `-translate-z-1`).

```html
<div class="transform perspective-500 rotate-y-45 bg-purple-500 w-32 h-32"> 
    <!-- 3D rotated purple box -->
</div>
```