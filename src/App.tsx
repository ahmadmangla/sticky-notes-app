import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface Notes {
  id: undefined | null | number;
  title: String;
}

export default function App() {
  const [notes, setNotes] = useState<Array<Notes>>([]);
  const [text, setText] = useState("");

  const addNote = (e: React.FormEvent<EventTarget>) => {
    setNotes([...notes, { title: text, id: Math.floor(Math.random() * 10000 + 1) }]);
  };

  return (
    <main>
      <div className="container flex items-center justify-center w-full my-4">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex max-w-sm items-center space-x-2 w-full">
              <Input type="text" placeholder="Type a note" className="hover:cursor-pointer" />
              <Button type="button" onClick={(e) => addNote(e)}>
                Add
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">Add a new note</DialogTitle>
              <DialogDescription>
                <form>
                  <div className="mb-4">
                    <Label className="text-base mb-2 text-black block" htmlFor="title">
                      Title
                    </Label>
                    <Input name="title" type="text" value={text} onChange={(e) => setText(e.target.value)} />
                  </div>
                  <div>
                    <Label className="text-base mb-2 text-black block" htmlFor="description">
                      Description
                    </Label>
                    <Textarea name="description" value={text} onChange={(e) => setText(e.target.value)} />
                  </div>
                </form>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" onClick={(e) => addNote(e)}>
                  Submit
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="max-w-6xl mx-auto ">
        <div className="cards-container justify-center  flex gap-2 flex-wrap">
          {notes.length > 0 ? (
            notes.map((item) => {
              return (
                <Card className="w-80" key={item.id}>
                  <CardHeader>
                    <CardTitle className="text-center text-lg">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })
          ) : (
            <h2>No Notes created yet</h2>
          )}
        </div>
      </div>
    </main>
  );
}
