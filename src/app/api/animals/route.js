import animals from "@/data/animals.json";
import topBreeds from "@/data/top-breeds.json";

export async function GET() {
  return Response.json({ animals, topBreeds });
}
