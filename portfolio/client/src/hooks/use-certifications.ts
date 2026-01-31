import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { Certification } from "@shared/schema";

export function useCertifications() {
  return useQuery<Certification[]>({
    queryKey: [api.certifications.list.path],
  });
}
