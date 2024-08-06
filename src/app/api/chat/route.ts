import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "~/server/auth";
import { db } from "~/server/db";

export async function GET() {
  const data = await db.post.findMany({
    include: {
      createdBy: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  try {
    // Parse the request body with type safety
    const json = (await req.json()) as { name: string };

    // Get the user session
    const session = await getServerSession(authOptions);

    // Check if the session is valid and contains a user ID
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Create a new post using the user's ID from the session
    const createdPost = await db.post.create({
      data: {
        name: json.name,
        createdById: session.user.id,
      },
    });

    // Return the created post as a JSON response with a 201 status
    return new NextResponse(JSON.stringify(createdPost), { status: 201 });
  } catch (error) {
    // Log the error for debugging
    console.error("Error creating post:", error);

    // Return a 500 Internal Server Error response with a relevant message
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
