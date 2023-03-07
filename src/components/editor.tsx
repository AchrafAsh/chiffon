import { useLocalStorage } from "@/utils/hooks";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

const sanitizeConfig = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
    allowedAttributes: { a: ["href"] },
};

export default function Editor() {
    const [content, setContent] = useLocalStorage("chiffon-content", "");

    function handleChange(event: ContentEditableEvent) {
        setContent(event.target.value);
    }
    function sanitize() {
        setContent(sanitizeHtml(content, sanitizeConfig));
    }

    if (typeof window === undefined) return null;

    return (
        <ContentEditable
            className="editable h-full max-w-2xl focus:outline-none text-base"
            tagName="div"
            html={content} // innerHTML of the editable div
            onChange={handleChange} // handle innerHTML change
            onBlur={sanitize}
        />
    );
}
