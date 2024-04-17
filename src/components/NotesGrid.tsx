import { useNotes } from "@/context/NotesContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NotesGrid = () => {
  const { notes } = useNotes();
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="cards-container justify-center  flex gap-2 flex-wrap">
        {notes.length > 0 ? (
          notes.map((item) => {
            return (
              <Card className="w-80" key={item.id}>
                <CardHeader>
                  <CardTitle className=" text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>{item.description}</CardContent>
              </Card>
            );
          })
        ) : (
          <h2>No Notes created yet</h2>
        )}
      </div>
    </div>
  );
};

export default NotesGrid;
