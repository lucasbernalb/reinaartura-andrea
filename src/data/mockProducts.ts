import { Product } from '@/types/product';

// Bocetos de Andrea Bernasconi - REEMPLAZAR CON INFO FINAL PARA SEO
// Las imágenes usan rutas locales desde /public

const obrasLocales = [
  // Obras con nombre
  { img: 'bebe.jpeg', titulo: 'Bebé', descripcion: 'Boceto preparatorio' },
  { img: 'frida.jpeg', titulo: 'Frida', descripcion: 'Boceto preparatorio' },
  { img: 'mi condor.jpg', titulo: 'Mi Cóndor', descripcion: 'Boceto preparatorio' },
  { img: 'no quepo.jpg', titulo: 'No Quepo', descripcion: 'Boceto preparatorio' },
  { img: 'parte del aire.jpg', titulo: 'Parte del Aire', descripcion: 'Boceto preparatorio' },
  { img: 'sin titulo.jpg', titulo: 'Sin Título', descripcion: 'Boceto preparatorio' },
  { img: 'Sinpintura.jpg', titulo: 'Sin Pintura', descripcion: 'Boceto preparatorio' },
  { img: 'Todoloqueexiste.jpg', titulo: 'Todo lo que Existe', descripcion: 'Boceto preparatorio' },
  
  // Prints/series (WhatsApp Images)
  { img: 'WhatsApp Image 2025-09-14 at 8.43.09 PM.jpeg', titulo: 'Print 01', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.10 PM.jpeg', titulo: 'Print 02', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.11 PM (1).jpeg', titulo: 'Print 03', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.11 PM (2).jpeg', titulo: 'Print 04', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.11 PM.jpeg', titulo: 'Print 05', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.12 PM (1).jpeg', titulo: 'Print 06', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.12 PM (2).jpeg', titulo: 'Print 07', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.12 PM.jpeg', titulo: 'Print 08', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.13 PM (1).jpeg', titulo: 'Print 09', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.14 PM.jpeg', titulo: 'Print 10', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.15 PM (2).jpeg', titulo: 'Print 11', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.16 PM (1).jpeg', titulo: 'Print 12', descripcion: 'Print de edición limitada' },
  { img: 'WhatsApp Image 2025-09-14 at 8.43.16 PM (2).jpeg', titulo: 'Print 13', descripcion: 'Print de edición limitada' },
  
  // Otras obras (img043 - img062)
  { img: 'img043.jpg', titulo: 'Obra 043', descripcion: 'Boceto preparatorio' },
  { img: 'img044.jpg', titulo: 'Obra 044', descripcion: 'Boceto preparatorio' },
  { img: 'img045.jpg', titulo: 'Obra 045', descripcion: 'Boceto preparatorio' },
  { img: 'img046.jpg', titulo: 'Obra 046', descripcion: 'Boceto preparatorio' },
  { img: 'img047.jpg', titulo: 'Obra 047', descripcion: 'Boceto preparatorio' },
  { img: 'img048.jpg', titulo: 'Obra 048', descripcion: 'Boceto preparatorio' },
  { img: 'img050.jpg', titulo: 'Obra 050', descripcion: 'Boceto preparatorio' },
  { img: 'img051.jpg', titulo: 'Obra 051', descripcion: 'Boceto preparatorio' },
  { img: 'img052.jpg', titulo: 'Obra 052', descripcion: 'Boceto preparatorio' },
  { img: 'img053.jpg', titulo: 'Obra 053', descripcion: 'Boceto preparatorio' },
  { img: 'img054.jpg', titulo: 'Obra 054', descripcion: 'Boceto preparatorio' },
  { img: 'img055.jpg', titulo: 'Obra 055', descripcion: 'Boceto preparatorio' },
  { img: 'img057.jpg', titulo: 'Obra 057', descripcion: 'Boceto preparatorio' },
  { img: 'img058.jpg', titulo: 'Obra 058', descripcion: 'Boceto preparatorio' },
  { img: 'img059.jpg', titulo: 'Obra 059', descripcion: 'Boceto preparatorio' },
  { img: 'img060.jpg', titulo: 'Obra 060', descripcion: 'Boceto preparatorio' },
  { img: 'img061.jpg', titulo: 'Obra 061', descripcion: 'Boceto preparatorio' },
  { img: 'img062.jpg', titulo: 'Obra 062', descripcion: 'Boceto preparatorio' },
];

// Generar productos desde las imágenes locales
const productosLocales: Product[] = obrasLocales.map((obra, index) => ({
  id: `local-${index + 1}`,
  title: obra.titulo,
  description: obra.descripcion,
  price: obra.descripcion.includes('Print') ? 800 : 2500,
  image_url: `/${obra.img}`,
  category: index < 8 ? 'classical' : 'modern',
  medium: obra.descripcion.includes('Print') ? 'print' : 'oil',
  dimensions: 'Variable',
  year: 2024,
  artist: 'Andrea Bernasconi',
  featured: index < 4, // Primeros 4 como destacados
  in_stock: true,
  stock_quantity: obra.descripcion.includes('Print') ? 20 : 1,
}));

export const mockProducts: Product[] = productosLocales;

export const getFeaturedProducts = () => 
  mockProducts.filter(p => p.featured);

export const getProductsByCategory = (category: 'classical' | 'modern') =>
  mockProducts.filter(p => p.category === category);

export const getProductById = (id: string) =>
  mockProducts.find(p => p.id === id);
