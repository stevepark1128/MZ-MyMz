export interface MenuNode {
    name: string;
    label: string;
    link?: string;
    children?: MenuNode[];
    parent?: MenuNode;
    ficon?: string;
    icon?: string;
    disabled?: boolean;
    inVisible?: boolean;
    params?: { [name: string]: string };
    divider?: boolean;
    url?: boolean;
    level?: number;
}