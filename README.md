# Student Roster Card Renderer

#Problem

The IT313 registrar needs a small Expo (React Native) screen that shows each
enrolled student as a reusable card (name, course, units). Students with a full
load get a "Full Load" label. A header shows the total number of students,
computed from the array (not hard-coded).

#Component Structure

- **StudentCard**: a reusable functional component. It receives `name`, `course`,
  `units`, and `isFullLoad` as destructured props and renders one student card.
  The "Full Load" label is shown with `{isFullLoad && <Text>Full Load</Text>}`.
- **StudentRoster**: the parent component. It holds the `students` array, shows
  the header using `students.length`, and uses `.map()` with
  `key={student.id}` to render one `StudentCard` per student. It returns a single
  root `View` that wraps the header and the list.

# How to Run

1. Install dependencies: `npm install`
2. Start the app: `npx expo start`
3. Scan the QR code with Expo Go, or press `w` to open it in the browser.
