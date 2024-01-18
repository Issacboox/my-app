import { Progress } from "@/components/ui/progress";

export default function loading() {
    return (
        <div className="flex items-center justify-center">
            <Progress value={33} />
        </div>
    );
}
