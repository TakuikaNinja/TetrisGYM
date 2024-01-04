#[derive(Debug, PartialEq)]
pub enum Block {
    T, J, Z, O, S, L, I, Unknown(u8)
}

impl From<u8> for Block {
    fn from(value: u8) -> Self {
        match value {
            0x2 => Block::T,
            0x7 => Block::J,
            0x8 => Block::Z,
            0xA => Block::O,
            0xB => Block::S,
            0xE => Block::L,
            0x12 => Block::I,
            _ => Block::Unknown(value),
        }
    }
}
