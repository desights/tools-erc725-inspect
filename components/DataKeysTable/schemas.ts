export enum SchemaName {
  'SupportedStandards:LSP3Profile' = 'SupportedStandards:LSP3Profile',
  'LSP3Profile' = 'LSP3Profile',
  'AddressPermissions[]' = 'AddressPermissions[]',
}

export const SCHEMA_DOCS_LINKS: { [key in SchemaName]: string } = {
  'SupportedStandards:LSP3Profile':
    'https://docs.lukso.tech/standards/standard-detection',
  'LSP3Profile':
    'https://docs.lukso.tech/standards/universal-profile/lsp3-profile-metadata',
  'AddressPermissions[]':
    'https://docs.lukso.tech/standards/universal-profile/lsp6-key-manager/',
};
