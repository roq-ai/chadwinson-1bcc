const mapping: Record<string, string> = {
  clients: 'client',
  quizzes: 'quiz',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
