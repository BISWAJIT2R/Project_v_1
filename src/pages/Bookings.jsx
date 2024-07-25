// import { getCabins } from "../services/apiCabins";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Button from "../components/Button";
import Column from "../components/Column";
import CabinsForm from "../components/CabinForm";
import { UseDeleteCabins, UseFetchCabins } from "../services/Query/Application";
import { useState } from "react";
import FormRow from "../components/FormRow";

const Bookings = () => {
  const [showForm, setShowForm] = useState(false);

  const { cabins = [], isPending, error } = UseFetchCabins();

  const { isPending: isDeleting, mutate } = UseDeleteCabins();

  {
    if (isPending) {
      return <Loader />;
    }
  }

  return (
    <Container>
      <header className="flex-between  py-3 bg-green-500">
        <h1 className="font-base">All Cabins</h1>
        <h3 className="">Sort/Fliter</h3>
      </header>
      <div className="cabins overflow-y-scroll">
        <Column />
        <div className="height-min w-full  flex flex-col gap-2  relative overflow-hidden">
          {cabins.map(
            ({
              id,
              discount,
              image,
              isAvailable,
              maxCapacity,
              name,
              price,
              discription
            }) => (
             <FormRow key={id} id={id} name={name} discount={discount} mutate={mutate} image={image} isAvailable={isAvailable} maxCapacity={maxCapacity} price={price} discription={discription}/>
            )
          )}
          <Button
            Text="Hello"
            customClass="bg-blue-500 font-[16px] text-white font-bold hover:bg-blue-700"
            onlick={() => setShowForm((showForm) => !showForm)}
          />
        </div>
        

      </div>
      {showForm && <CabinsForm />}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae aliquid, quis eum illo unde modi accusantium doloribus harum possimus eveniet pariatur dolorum tempore. Laudantium officiis cum sequi magni dolor neque corrupti at aliquid, quas sint, facere ratione enim alias. Reiciendis doloremque quaerat eligendi nemo laudantium, perspiciatis explicabo error tempora architecto expedita aspernatur voluptatum cum ratione, sit consequuntur? Voluptates quia hic ab tenetur dolor incidunt animi porro, officia veritatis velit iure quaerat sint cupiditate suscipit reprehenderit veniam eum obcaecati ut illo quisquam. Deleniti corporis dolorem corrupti quidem quisquam aperiam molestiae iusto, illum eos temporibus error sint nulla. Totam sapiente sint eligendi, molestias dolorum accusamus quis. Corrupti perspiciatis veniam ducimus provident quod earum repellat impedit a laborum, dicta facere minima consequuntur odio. Et harum veniam autem hic. Provident dolorem, deserunt, commodi officiis architecto exercitationem illo suscipit accusantium pariatur doloremque ullam alias quo. Modi, magni. Dolorum magni, architecto eum animi possimus ex error dicta veritatis illum repellendus vel exercitationem reiciendis esse delectus ipsam iure veniam, unde provident placeat quaerat numquam ad omnis! Earum fuga quae nisi. Unde architecto qui consequatur non cumque fugiat nisi voluptates doloremque provident suscipit corrupti natus, maxime repellat ab accusamus laborum ducimus perferendis. Excepturi facilis eum quibusdam veritatis rem ullam nihil soluta aliquam ipsum. Ad, reiciendis. Rem explicabo voluptates repellendus sit, porro asperiores. Cum error temporibus deleniti, et nisi impedit iure est repellendus, voluptatum reprehenderit inventore repellat ea neque earum laboriosam sed praesentium nihil maiores similique? Delectus, odit. Tempore cumque nostrum voluptatem, tempora placeat amet magnam ea, a neque soluta voluptatibus, vel ratione unde expedita praesentium animi aliquam molestias saepe harum modi corrupti dolor omnis totam numquam? Non expedita laboriosam assumenda illum? Inventore blanditiis ducimus debitis dignissimos dicta velit eveniet minima maiores laudantium dolorem, voluptatibus in hic recusandae placeat odio obcaecati! Delectus pariatur optio maiores nesciunt! Quod at molestiae repudiandae cum aperiam itaque, libero adipisci ducimus magnam cumque labore quasi enim nesciunt nisi voluptatum culpa facere, autem deleniti repellendus. Odit animi cum modi ut! Omnis mollitia expedita tempora eveniet incidunt accusamus, doloremque obcaecati, odit et, iusto quidem aperiam magni molestias beatae quo? Nostrum sit maxime labore maiores tempore quasi aliquam laudantium magni commodi unde assumenda animi ea totam molestiae possimus aut, veniam, est sequi autem magnam odit nulla aliquid cum. Eius ratione nam fugit expedita, repellat cum, ducimus sunt quaerat rerum quidem a eum. Unde eligendi neque in eos error maxime consequuntur temporibus eum eveniet dignissimos ipsa eaque illo pariatur, tempore, aut ipsum rem sit, iure ad mollitia deleniti. Quia neque aspernatur, velit ipsum omnis, repellat iste inventore similique cupiditate culpa maiores tempore earum placeat recusandae beatae ea, quam odit iusto! Odio animi voluptates ut. Tempora possimus delectus corporis velit porro itaque soluta ex quis culpa, nulla ullam labore optio laboriosam magnam minus atque! Accusamus magnam hic doloribus nihil incidunt assumenda labore optio delectus odit id. Quaerat, voluptas temporibus! Eaque saepe iste quia ut quisquam quaerat dolorem non dolore. Itaque omnis ex aut amet magni, ipsum architecto quia repudiandae quaerat eos? Molestias dolores non, quam, fuga amet blanditiis repudiandae, possimus aperiam ex quo reiciendis ea corrupti eius doloribus excepturi quod natus necessitatibus repellendus hic ipsa. Aut veritatis quasi soluta, asperiores dicta quae deleniti corporis in velit autem. Eaque quia reiciendis magnam, quisquam id sint maiores nisi dicta, beatae, quam enim minus voluptate quis iure excepturi nam numquam? Accusamus nobis sint, impedit asperiores, quas veritatis non, ipsam officiis eligendi odit dolores praesentium itaque molestiae ab voluptas iste autem. Ex porro iste quam debitis pariatur? Harum consequuntur consequatur non quas voluptate est, dolorem ratione impedit labore tempore laborum nesciunt qui facilis. Sapiente, velit, earum cumque aliquam enim sunt perferendis voluptatem aperiam rem repellendus odio ducimus dolor quis consectetur ipsum consequuntur. Laboriosam dignissimos error quod nesciunt nam dolor! Id natus est totam eum ab fugiat enim voluptatem unde, dicta, libero sequi? Ab in numquam veritatis reprehenderit sapiente quisquam et architecto excepturi accusamus quaerat possimus sint recusandae ratione libero eveniet nihil temporibus at natus, magnam provident quas a, molestiae ex facilis. Fuga, mollitia. Soluta officia molestias accusantium delectus. Minima earum pariatur itaque esse sapiente? Delectus mollitia animi dicta, eveniet fugit deserunt ut dolore, sed vitae aperiam quis odio? Assumenda optio non doloremque sequi perferendis hic harum corporis impedit dolore sed voluptate similique possimus consectetur ab, cum ipsam vitae iure vel! Dolore commodi maxime fugit magni ullam dicta odio corporis incidunt dolores asperiores praesentium sit est corrupti iusto tempora, libero, rem hic excepturi officiis magnam culpa dolor. Suscipit minus pariatur voluptates magnam quasi, rem a odit nam aut et doloremque delectus laboriosam, maiores quos unde, fuga ex tenetur accusantium at neque! Itaque deserunt minus aspernatur amet repudiandae quibusdam veritatis explicabo delectus id expedita inventore aliquid voluptate facere, fuga et tempora illo, error beatae a est nemo voluptatum? Eaque delectus amet ex rerum atque, minima ullam alias. Aspernatur dignissimos tempore voluptas aliquam eaque provident temporibus excepturi laborum possimus distinctio culpa, quis similique accusantium commodi odit minima recusandae eum deleniti. Error qui corporis pariatur excepturi vel optio amet quos odit, perferendis quo. Quas veritatis deserunt asperiores doloribus libero perspiciatis fuga ratione, nihil odit adipisci quod voluptate? Velit eos eligendi autem animi sed neque provident sunt exercitationem qui error? Ex deserunt, fugit harum, fuga quis similique laboriosam ducimus vitae sint voluptatibus quod recusandae maiores assumenda porro corporis molestiae quia iusto commodi ad numquam tempore pariatur? Odit earum, ducimus culpa id deleniti dignissimos necessitatibus itaque, repellat beatae incidunt ipsum optio est expedita corrupti molestiae a nam. Omnis aut cum, sequi error magni suscipit esse, numquam, at fugiat aliquid quasi aliquam? Dicta, autem sequi beatae eaque, earum incidunt quaerat officia maiores atque a saepe rerum vero corrupti enim nulla odio dolorem! Accusamus assumenda veritatis odit fugiat nostrum ut in incidunt commodi aperiam, quis obcaecati ex laudantium veniam doloremque saepe inventore ipsa quidem totam facilis, blanditiis explicabo vero voluptatum! Odio corporis fugiat sequi sint enim eos eum, nobis quas dolores voluptatum totam, fugit consequatur cumque ipsum fuga mollitia assumenda ipsa sed placeat autem repellat cum! Quae praesentium architecto asperiores? Quisquam, ex. Fugit illum saepe quas non rem maxime culpa reiciendis nulla pariatur exercitationem! Reiciendis et iusto, possimus blanditiis porro temporibus ratione distinctio quae asperiores mollitia, tempora, rem alias quas accusamus consectetur! Aut, dolores earum distinctio ipsum vitae, nisi, ratione consequuntur non quia incidunt at accusamus veniam possimus vel explicabo nobis iure? Deleniti ducimus cum nam maxime, officia culpa fugit non quos pariatur ex officiis placeat dolores minus a numquam voluptate doloremque, suscipit expedita quod asperiores. Dolor excepturi hic impedit, nam eligendi sit veniam, ipsam dignissimos debitis a in nostrum, earum enim! Eos, similique repellendus deleniti sequi placeat eius dolores? Fugiat unde animi alias, vel ea aut, fuga hic et sapiente molestias similique nobis itaque officiis amet eius possimus maxime provident impedit. Similique suscipit est error, sint nesciunt illum dolores aliquam soluta non sit totam quasi veniam dolorem hic amet quaerat sapiente, beatae velit eligendi rerum laborum odio explicabo. Placeat dolorum quis alias blanditiis laudantium nisi tempore provident aut! Dignissimos corporis molestias esse ad blanditiis itaque nostrum minima est, ipsa numquam reiciendis eaque sed labore neque mollitia dolorum repellat maxime voluptatem earum ea expedita omnis voluptate. Ipsum sequi error ut, eligendi ab consectetur harum laborum magni suscipit voluptate obcaecati recusandae sed reprehenderit minima. Ea consequuntur iure quos atque facilis, optio autem delectus amet at vitae consectetur minus maiores provident voluptas natus aliquam aliquid saepe nobis eligendi suscipit quae. Exercitationem, quam earum?
      </p> */}
    </Container>
  );
};

export default Bookings;
