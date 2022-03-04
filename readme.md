## !!Important

Due to limited time following things were not implemented

- Any tests
- Correct error handling
- Optimistic UI
- Field level validation (The form will crash now if you don't fill everything in)
- 2nd pass over the code to refactor less optimal/reusable code

## Why react-final-form and not the antd Form

I ran into an issue with the dateRangePicker since the wanted outcome would be an object where 2 fields would be set in this case.
I did not find an elegant solution to do this with antd so I opted for another form library. I picked react-final-form because I like the api and has the least gotchas in my opinion. (formik slowing down for large forms, react-hook-form not being as nice to use with the custom antd elements. You also lose most of the performance benefits the library has to offer)

## Getting started

1. Install dependencies: `pnpm i`
2. Run the app locally: `pnpm dev`
