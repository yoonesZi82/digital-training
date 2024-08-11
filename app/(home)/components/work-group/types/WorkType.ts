interface WorkType {
  id: string;
  title: string;
  data: { id: string; title: string; src: string; link?: string }[];
}

export default WorkType;
