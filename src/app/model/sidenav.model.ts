export class SideNavModel {

    public item: string;
    public icon: string;
    public page: boolean;
    public menu: string;

    constructor() {
        this.item = '';
        this.icon = '';
        this.menu = '';
        this.page = false;
    }
}