import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNotes } from "@/context/NotesContext";

const AddNote = () => {
  const [value, setValue] = useState({ title: "", description: "" });

  const { notes, setNotes } = useNotes();

  const handleChange = (e: any) => {
    setValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addNote = () => {
    if (value.title === "" || value.description === "") {
      return;
    }
    setNotes([...notes, value]);
    setValue({ title: "", description: "" });
  };

  return (
    <div className="container flex items-center justify-center w-full my-4">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex max-w-sm items-center space-x-2 w-full">
            <Input type="text" placeholder="Add a Note" className="hover:cursor-pointer" />
            <Button type="button">Add</Button>
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
                  <Input name="title" type="text" value={value.title} onChange={handleChange} />
                </div>
                <div>
                  <Label className="text-base mb-2 text-black block" htmlFor="description">
                    Description
                  </Label>
                  <Textarea name="description" value={value.description} onChange={handleChange} />
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
  );
};

export default AddNote;
