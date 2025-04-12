import DetailBoard, {
  DetailBoardProps,
} from "@/components/DetailBoard/DetailBoard";
import { apiServer } from "@/lib/apiServer";

export default async function DetailBoardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await apiServer.get<DetailBoardProps>(`/articles/${id}`);
  return (
    <div className="w-full">
      <DetailBoard board={response.data} />
    </div>
  );
}
