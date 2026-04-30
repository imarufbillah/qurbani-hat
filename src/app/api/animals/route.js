import animals from "@/data/animals.json";

export async function GET() {
  return Response.json(animals);
}
