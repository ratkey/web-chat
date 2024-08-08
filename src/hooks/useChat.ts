/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const URI = `/api/chat`;

type CreatePost = {
  name: string;
};

export interface UserWithPost {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  posts: PostWithUser[];
}

export interface PostWithUser {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
  createdBy: {
    name: string | null;
    image: string | null;
  };
}

const postChatData = async (
  newChatData: CreatePost,
): Promise<PostWithUser[]> => {
  const { data } = await axios.post(URI, newChatData);
  return data;
};

const getChatData = async () => {
  const { data } = await axios.get(URI);
  return data;
};

export function usePostChatData() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["postMessage"],
    mutationFn: postChatData,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["getMessages"] });
    },
  });
}

export function useGetChatData() {
  return useQuery<PostWithUser[]>({
    queryKey: ["getMessages"],
    queryFn: getChatData,
    refetchInterval: 2000,
  });
}
