import { NavItem, SidebarGroup } from "@/config/navigation";

export interface FlatNavItem {
  label: string;
  href: string;
  category: string;
}

/**
 * Flattens nested NavItems and SidebarGroups into a single searchable list.
 */
export function flattenNavigation(
  topNav: NavItem[],
  sidebarNav: SidebarGroup[]
): FlatNavItem[] {
  const flattened: FlatNavItem[] = [];

  // Helper to process nested NavItems
  const processNavItem = (item: NavItem, category: string) => {
    flattened.push({
      label: item.label,
      href: item.href,
      category,
    });
    if (item.items) {
      item.items.forEach((subItem) => processNavItem(subItem, category));
    }
  };

  // Process top menu items
  topNav.forEach((item) => processNavItem(item, "Main Menu"));

  // Process sidebar grouped items
  sidebarNav.forEach((group) => {
    group.items.forEach((item) => {
      flattened.push({
        label: item.label,
        href: item.href,
        category: group.category,
      });
      // Handle sub-items if they exist in sidebar nav too
      if ('items' in item && Array.isArray(item.items)) {
        item.items.forEach((sub) => {
          flattened.push({
            label: sub.label,
            href: sub.href,
            category: group.category,
          });
        });
      }
    });
  });

  // Remove duplicates by href (some items might appear in both)
  return Array.from(new Map(flattened.map((item) => [item.href, item])).values());
}
