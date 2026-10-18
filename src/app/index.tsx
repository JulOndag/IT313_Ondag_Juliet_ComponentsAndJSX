import { View, Text } from "react-native";

interface StudentCardProps {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

function StudentCard({ name, course, units, isFullLoad }: StudentCardProps) {
  return (
    <View
      style={{ padding: 12, marginBottom: 8, borderWidth: 1, borderRadius: 8 }}
    >
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
      <Text>{course}</Text>
      <Text>Units: {units}</Text>
      {isFullLoad && <Text>Full Load</Text>}
    </View>
  );
}

const students = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

export default function StudentRoster() {
  return (
    <View style={{ padding: 16, marginTop: 40 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 12 }}>
        {`Total Students: ${students.length}`}
      </Text>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </View>
  );
}
