export interface itemsMenu {
    name: string,
    target: string
    active: boolean,
    ref?: string
}

export const items: itemsMenu[] = [
    {
      name: 'NFT',
      active : true,
      target: 'nft'
    },
    {
      name: 'WHO WE ARE ',
      active : false,
      target: 'whoweare'
    },
    {
      name: 'ROADMAP',
      active : false,
      target: 'roadmap'
    },
    {
      name: 'LIGHTPAPER',
      active : false,
      target: 'LIGHTPAPER',
      ref: 'https://deepnation.gitbook.io/deepnation-lightpaper/'
    }
  ]