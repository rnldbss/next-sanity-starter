import {blockContentType} from './utilities/blockContent'
import {customImageType} from './utilities/customImage'
import {siteMetadataType} from './plugins/siteMetadata'
import {headingWithTextType} from './plugins/headingWithText'
import {homeType} from './documents/home'

export const schemaTypes = [
  blockContentType,
  customImageType,
  siteMetadataType,
  headingWithTextType,
  //
  homeType,
]
